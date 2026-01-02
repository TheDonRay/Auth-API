const jwt = require("jsonwebtoken");
const posts = require("../data/practicedata.js");

const jwtFunction = (req, res) => {
  //first lets get the user name here
  const username = req.body.username;
  const userExists = posts.find((post) => post.username == username);
  if (userExists) {
    const user = { name: username };
    //to create a JWT webtoken we can pass in the jwt.sign and the first thing it takes is the payload
    // the next thing we need is our secret key. To create a secret value you can use the crypt library inside nodeJs
    const accessToken = jwt.sign(user, process.env.TOKEN_VALUE);
    res.json({  
        isValid: true,
        accessToken: accessToken 
    }); // what this does now is basically once username is validated we create a token that holds a payload value which is the users username and we create a JWT token for that information that we can generate.
  }
};

module.exports = jwtFunction;
