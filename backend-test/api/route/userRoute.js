module.exports = function (app) {
  let userController = require("../controllers/userControllers.js");

  app
    .route("/profile")
    .post(userController.loginRequired, userController.profile);
  app.route("/auth/register").post(userController.register);
  app.route("/auth/sign_in").post(userController.sign_in);
  app.route("/create-checkout-session").post(userController.checkout);
};
