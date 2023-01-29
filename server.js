require("dotenv").config();
let express = require("express");
let app = express();
let path = require("path");
let User = require("./api/models/userModels");
let jwt = require("jsonwebtoken");
const cors = require("cors");

let port = process.env.PORT || 4000;

const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

const mongoURI = process.env.MONGODB_LIVE_URI;
mongoose.connect(mongoURI, {
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

app.use(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    req.user = undefined;
    return next();
  }

  const token = authHeader.split(" ")[1];
  try {
    req.user = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    next();
  } catch (error) {
    req.user = undefined;
    next();
  }
});

let routes = require("./api/route/userRoute");
routes(app);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use((req, res, next) => {
  const error = new Error(`${req.originalUrl} not found`);
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).send({ error: error.message });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

module.exports = app;
