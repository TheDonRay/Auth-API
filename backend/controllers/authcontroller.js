const posts = require("../data/practicedata.js");

const authFunction = (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name));
};

((module.exports = authFunction), posts);
