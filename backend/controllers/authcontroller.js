const posts = require("../data/practicedata.js");

const authFunction = (req, res) => {
  res.json(posts);
};

((module.exports = authFunction), posts);
