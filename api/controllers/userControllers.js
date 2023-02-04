require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_TEST_KEY);
let mongoose = require("mongoose");
let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");
let User = mongoose.model("User");

exports.register = async (req, res) => {
  try {
    const newUser = new User({
      ...req.body,
      hash_password: bcrypt.hashSync(req.body.password, 10),
    });
    const user = await newUser.save();
    user.hash_password = undefined;
    return res.json(user);
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

exports.sign_in = async function (req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user || !user.comparePassword(req.body.password)) {
      return res.status(401).json({
        message: "Authentication failed. Invalid user or password.",
      });
    }
    const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET);
    return res.json({
      token: accessToken,
      user: user,
      auth: true,
    });
  } catch (err) {
    return res.status(400).send({ message: err });
  }
};

exports.checkout = async function (req, res) {
  try {
    const price = req.body.priceTotal * 100;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: price,
      currency: "gbp",
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error creating payment intent" });
  }
};

exports.loginRequired = function (req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized user!!" });
  }
};
exports.profile = function (req, res, next) {
  if (req.user) {
    return res.send(req.user);
  } else {
    return res.status(401).json({ message: "Invalid token" });
  }
};
