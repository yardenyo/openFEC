const mongoose = require("mongoose");
require("dotenv").config();

//Variables
const uri = process.env.ATLAS_URI || "";

// Connect to MongoDB Atlas
async function connectToDB() {
  try {
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to MongoDB Atlas");
      });
  } catch (err) {
    throw err;
  }
}

module.exports = connectToDB;
