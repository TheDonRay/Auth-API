const express = require("express");
const authPractice = express.Router();

const authFunction = require("../controllers/authcontroller.js"); 
// import middleware for this route 
const authenticateToken = require("../middleware/auth.tokenValidation.js"); 

authPractice.get("/posts", authenticateToken, authFunction);

module.exports = authPractice;
