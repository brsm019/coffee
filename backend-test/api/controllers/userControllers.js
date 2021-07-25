require("dotenv").config();
const stripe = require("stripe")(
  "sk_test_51IyCkCGDpXfgd5Nm8stgabBNB4bOptc2b96cvfgUqIaEbz4iXB3ZbJklfhy4h01VCFfADOrsENbk43iPK0i745Yp00dDk7iiLu"
);
let mongoose = require("mongoose");
let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");
let User = mongoose.model("User");

exports.register = function (req, res) {
  let newUser = new User(req.body);
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
  newUser.save(function (err, user) {
    if (err) {
      return res.status(400).send({
        message: err,
      });
    } else {
      user.hash_password = undefined;
      return res.json(user);
    }
  });
};

exports.sign_in = function (req, res) {
  User.findOne(
    {
      email: req.body.email,
    },
    function (err, user) {
      if (err) throw err;
      if (!user || !user.comparePassword(req.body.password)) {
        return res.status(401).json({
          message: "Authentication failed. Invalid user or password.",
        });
      }
      let accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET);

      return res.json({
        token: accessToken,
        user: user,
        auth: true,
      });
    }
  );
};

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

exports.checkout = async function (req, res) {
  const price = req.body.priceTotal * 100;
  console.log({ price });
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: price,
    currency: "usd",
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
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
    res.send(req.user);
    next();
  } else {
    return res.status(401).json({ message: "Invalid token" });
  }
};
