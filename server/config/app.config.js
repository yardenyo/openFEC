const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");

const candidatesRoutes = require("../routes/candidates.routes.js");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://monumental-alfajores-52d6f4.netlify.app",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/candidates", candidatesRoutes);

module.exports = app;
