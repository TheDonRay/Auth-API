const express = require("express");
const jwtroute = express.Router();
const jwtFunction = require("../controllers/jwtcontroller.js");

// since we want to actually create a token
jwtroute.post("/login", jwtFunction);

module.exports = jwtroute;
