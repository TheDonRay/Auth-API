const express = require("express");
const authPractice = express.Router();

const authFunction = require("../controllers/authcontroller.js");

authPractice.get("/posts", authFunction);

module.exports = authPractice;
