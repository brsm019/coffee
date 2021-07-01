module.exports = function (app) {
  let userController = require("../controllers/userControllers.js");

  app
    .route("/profile")
    .post(userController.loginRequired, userController.profile);
  app.route("/auth/register").post(userController.register);
  app.route("/auth/sign_in").post(userController.sign_in);
};

/* 
  
  TO DO:

  Need to work out how the JWT is working/
  Send session storage to frontend / Or just send any information that can be visible to front end - user info / token
  Create component for login - to separate private and public routes
  
  */
