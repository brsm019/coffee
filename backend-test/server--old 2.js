// Inside server.js//

// Lets use some of the packages we've installed
var mongoDb = require("mongodb");
var MongoClient = mongoDb.MongoClient;
const newRouter = require("./api/router.js");

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//The names we're using below were defined in the last post
MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true }) // This is the location of where your local database is living.
  .then((client) => {
    const db = client.db("Testing"); // The name we gave our DB
    const testCollection = db.collection("TEST_NUMBER_1"); // The name we gave our collection inside the DB
    const testRouter = newRouter(testCollection); // We haven't built the router functionality yet, but we will next!

    app.use("/api/test", testRouter); // Defining the base route where we can later access our data
  })
  .catch(console.err);

app.listen(4000, function () {
  console.log(`Listening on this port: ${this.address().port}`);
});
