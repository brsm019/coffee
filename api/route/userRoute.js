module.exports = (app) => {
  let userController = require("../controllers/userControllers.js");

  app
    .route("/profile")
    .post(userController.loginRequired, userController.profile);
  app.route("/auth/register").post(userController.register);
  app.route("/auth/sign_in").post(userController.sign_in);
  app.route("/create-payment-intent").post(userController.checkout);
};
