require("dotenv").config();
let express = require("express");
let app = express();
let port = process.env.PORT || 4000;
let User = require("./models/userModels");
let jwt = require("jsonwebtoken");
const cors = require("cors");
const path = require("path");

const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

const mongoURI = process.env.MONGODB_LIVE_URI;
mongoose.connect(mongoURI, {
  dbName: "myFirstDatabase",
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.static("."));
app.use(express.json());
app.use(cors());
app.use(express.static("."));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.ACCESS_TOKEN_SECRET,
      function (err, user) {
        if (err) req.user = undefined;
        req.user = user;
        // res.json({ user, auth: true });
        next();
      }
    );
  } else {
    req.User = undefined;
    next();
  }
});
let routes = require("./route/userRoute");
routes(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API running");
  });
}

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Listening to port ${port}`);
});

module.exports = app;
