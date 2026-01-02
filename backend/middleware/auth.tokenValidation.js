const jwt = require('jsonwebtoken'); 

//create a middleware function to actually authenticate our token 
function authenticateToken(req, res, next) { 
    // we want to get the token that they send us verify that its the correct user and return that user to the get post route 
    // inside this function we need to get the actual token which comes from the header our token comes after the word Bearer 
    //to get the header we can do this 
    const authHeader = req.headers['authorization']; // the authorization header follows the format of bearer then the token  
    const token = authHeader && authHeader.split(' ')[1]; //this basically gets the second part which is the token itself  
    // if you are wondering the authHeader && authHeader says if we have an auth header then return the token if not return undefined. 
    if (token == null) { 
        return res.status(401).json({ 
            Error: 'No valid token to appear'
        }); 
    } 
    jwt.verify(token, process.env.TOKEN_VALUE, (err, user) => { 
        if (err) { 
            return res.status(403).json({ // here we basically say that we have a token but its no longer valid or its a wrong token
                invalidToken: "No access"
            });
        } 
        req.user = user;  
        next(); // move on from our middleware
    });
}; 

module.exports = authenticateToken; 