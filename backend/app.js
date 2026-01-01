const express = require('express'); 
const app = express(); 

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const authRoute = require('./routes/authroute.js');   
const jwtroute = require('./routes/jwtRoute.js'); 

app.use('/api/', authRoute);   
app.use('/api', jwtroute); 

app.get('/', (req, res) => { 
    res.json({ 
        Server: "Running Successfully"
    }); 
});  

module.exports = app; 


