let express = require("express"),
  app = express(),
  port = process.env.PORT || 4000,
  User = require("./models/userModels"),
  jsonwebtoken = require("jsonwebtoken");
const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
const option = {
  socketTimeoutMS: 30000,
  keepAlive: true,
  reconnectTries: 30000,
};

// const mongoURI = process.env.MONGODB_URI;
mongoose
  .connect("mongodb://localhost:27017/Accounts", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(
    () => {
      // console.log(client);
      // var conn = mongoose.connection;
      // conn.on("connected", function () {
      //   console.log("database is connected successfully");
      // });
      // conn.on("disconnected", function () {
      //   console.log("database is disconnected successfully");
      // });
    },
    function (err) {
      //err handle
      console.log(err);
    }
  );

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jsonwebtoken.verify(
      req.headers.authorization.split(" ")[1],
      "RESTFULAPIs",
      function (err, decode) {
        if (err) req.User = undefined;
        req.user = decode;
        next();
      }
    );
  } else {
    req.User = undefined;
    next();
  }
});
var routes = require("./route/userRoute");
routes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(port);

console.log(" RESTful API server started on: " + port);

module.exports = app;
