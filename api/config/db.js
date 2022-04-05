/** @format */

const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  try {
    // Connect to the MongoDB cluster
    return mongoose.connect(
      process.env.MONGO_URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("Mongoose is connected")
    );
  } catch (error) {
    console.log("could not connect", error);
  }
};

module.exports = connect;
