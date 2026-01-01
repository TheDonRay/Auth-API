const posts = require('')

const authFunction = (req, res) => { 
    res.json(posts); 
}; 

module.exports = authFunction, posts; 