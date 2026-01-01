const jwt = require('jsonwebtoken'); 
const posts = require('./authcontroller.js'); 

const jwtFunction = (req, res) => { 
    //first lets get the user name here 
    const username = req.body.username; 
    const user = { name: username }; 
    //to create a JWT webtoken we can pass in the jwt.sign and the first thing it takes is the payload 
    // the next thing we need is our secret key  
    jwt.sign(user, process.env.SECRET_KEY)
    

}



module.exports = jwtFunction; 