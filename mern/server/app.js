const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();


dotenv.config({ path:'./config.env'});
require('./db/conn');

//database model
// const User=require('./model/userSchema');

app.use(express.json());
//router files connected
app.use(require('./router/auth'));

const PORT=process.env.PORT;

//Middleware
const middleware = (req,res,next) => {
    console.log('Middleware working ');
    next();
}


app.get('/', (req ,res) => {
    res.send('hello world');
});

app.get('/login', (req ,res) => {
    res.send('Login Page');
});

app.get('/signup', (req ,res) => {
    res.send('Sign Up Page');
});

app.get('/about', middleware,(req ,res) => {
    res.send('About Page');
});

app.listen(PORT, () => {
    console.log(`server is running in port ${PORT}`);
});