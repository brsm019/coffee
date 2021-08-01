// Inside router.js //

const express = require("express");
const ObjectID = require("mongodb").ObjectID;
const bcrypt = require("bcryptjs");
const User = require("../models/userModelsß.js");
// This function will hold all the routing functionality for the database, and will be used in server.js
const newRouter = function (collection) {
  const router = express.Router();

  // Function for catching errors, this is to keep the code DRY
  //   const errorCatcher = function(inputError){
  //     console.error(inputError);
  //     res.status(500);
  //     res.json({ status: 500, error: inputError })
  //   }

  // Route for getting all staff data
  router.get("/", (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => console.log(err));
  });

  // Route for getting specific staff data
  router.get("/:id", (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((doc) => res.json(doc))
      .catch((err) => console.log(err));
  });

  // Route for deleting specific staff
  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    collection
      .deleteOne({ _id: ObjectID(id) })
      .then(() => collection.find().toArray())
      .then((docs) => res.json(docs))
      .catch((err) => console.log(err));
  });

  // Route for updating specific staff
  router.put("/:id", (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;

    collection
      .findOneAndUpdate({ _id: ObjectID(itemId) }, { $set: updatedItem })
      .then((result) => {
        res.json(result.value);
      })
      .catch((err) => console.log(err));
  });

  // // Route for creating new staff
  // router.post("/", (req, res) => {
  //   const newData = req.body;
  //   collection
  //     .insertOne(newData)
  //     .then((result) => {
  //       res.json(result.ops[0]);
  //     })
  //     .catch((err) => console.log(err));
  // });

  // Route for creating new registration
  router.post("/register", async (req, res) => {
    // console.log(req.body);
    const {
      firstName,
      lastName,
      email,
      password: plainTextPassword,
    } = req.body;

    const password = await bcrypt.hash(plainTextPassword, 10);
    // console.log(password);

    try {
      const response = await User.insertOne({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      // .then((result) => {
      //   res.json(result.ops[0]);
      //   console.log(result);
      // });
      // console.log("New collection created", response);
    } catch (error) {
      // console.log(error);
      return res.json({ status: error });
    }
  });

  return router;
};

/*

CREATE A USER SCHEMA FOR YOUR DATABASE AND SET FIELDS TO REQUIRED AND UNIQUE//

Need to change mongoDB to mongoose in server and then create a new database, connect routes to new database
then test on new user schema

CREATE NEW DATABASE FOR PRODUCTION NOT TESTING

*/

module.exports = newRouter;
