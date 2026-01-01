const jwt = require('jsonwebtoken'); 
const posts = require('../data/practicedata.js'); 

const jwtFunction = (req, res) => { 
    //first lets get the user name here 
    const username = req.body.username; 
    const userExists = posts.find(post => post.username == username);  
    if (userExists) { 
        const user = { name:username }; 
    //to create a JWT webtoken we can pass in the jwt.sign and the first thing it takes is the payload 
    // the next thing we need is our secret key. To create a secret value you can use the crypt library inside nodeJs
    jwt.sign(user, process.env.SECRET_KEY) 
    }
    

}



module.exports = jwtFunction; 