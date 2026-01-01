const posts = [ 
    { 
        username: 'Ray', 
        title: 'Post1'
    }, 
    { 
        username: 'Jim', 
        title: 'Post2'
    }
];  

const authFunction = (req, res) => { 
    res.json(posts); 
}; 

module.exports = authFunction, posts; 