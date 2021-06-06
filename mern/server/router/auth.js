const jwt =require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt =require('bcryptjs');

require('../db/conn');  
const User = require("../model/userSchema");

router.get('/',(req ,res) => {
    res.send('hello world router js');
});

// router.get('/getdata',authenticate, (req,res) => {
//     console.log('Get data');
//     res.send(req.rootUser);
// });

router.post('/register',async (req,res) =>{

    const { name,email,phone,password,cpassword } =req.body ;

    if( !name || !email || !phone || !password || !cpassword ){
        return res.status(422).json({error : "Please fill all fields "});
    }

    try{
        const userExist = await User.findOne({email:email});

        if (userExist){

            return res.status(422).json({error : "user with same email already exist"});
        }else if(password != cpassword){

            return res.status(422).json({error : "password are not matching "});
        }else{

            const user =new User ({ name,email,phone,password,cpassword });
            await user.save();
            res.status(201).json({message:"user registered successfully."});
        }
        

    }catch(err)
    {
        console.log(err);
    }

});

//login route
router.post('/login', async(req ,res) => {

    try{
            let token;
            const { email,password }=req.body;

            if( !email || !password ){
                return res.status(422).json({error : "Please fill all fields "});
            }
            const userLogin  = await User.findOne({email:email});
            
            if(userLogin)
            {
                // console.log(userLogin);
                const isMatch =await bcrypt.compare(password,userLogin.password);
                token = await userLogin.generateAuthToken();
                console.log(token);

                res.cookie("jwtoken",token ,{
                    expires : new Date(Date.now() + 86400000),
                    httpOnly :true
                });

                if(!isMatch)
                {
                    res.status(400).json({ error:"Invalid credentials"});
                }else{
                    res.json({message:'user signed in'});
                }
            }
            else{
                res.status(400).json({ error:"Invalid credentials"});
            }

        }catch(err){
            console.log(err);
        }
});


//logout 
router.get('/logout', (req,res) => {
    console.log('Logout page');
    res.clearCookie('jwtoken' , {path : '/login'})
    res.status(200).send('User logged out');
});

module.exports =router;