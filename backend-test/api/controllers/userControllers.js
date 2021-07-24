require("dotenv").config();
// const stripe = require("stripe")(
//   "sk_test_51IyCkCGDpXfgd5Nm8stgabBNB4bOptc2b96cvfgUqIaEbz4iXB3ZbJklfhy4h01VCFfADOrsENbk43iPK0i745Yp00dDk7iiLu"
// );
// const YOUR_DOMAIN = "http://localhost:4000/checkout";
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

// exports.checkout = async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "gbp",
//             product_data: {
//               name: req.title,
//               images: ["https://i.imgur.com/EHyR2nP.png"], //Get rid
//             },
//             unit_amountt: 2000, //Not this one
//             unit_amount: req.amount,
//           },
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: `${YOUR_DOMAIN}?success=true`,
//       cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//     });

//     res.redirect(303, session.url);
//     res.sendStatus(200).json({ message: "Price accepted" });
//   } catch (err) {
//     res.sendStatus(400).json({ message: err });
//   }
// };

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
