const jwt =require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt =require('bcryptjs');
const News = require('../model/newsModel')
const Favs = require('../model/favModel')
const Reads = require('../model/ReadLater')

router.get('/theWire',async function(req,res){
    // News.create({paper:"yo"})
    
    News.find({paper:'theWire'})
    .then(data => {
        console.log('Wire')
        res.status(200).json({result:data});
    }).catch(err=>{
        console.log(err)
        res.status(500).json({err:err})
    })
    
})
//hindustantimes
router.get('/hindustanTimes',async function(req,res){
    // News.create({paper:"yo"})
    
    News.find({paper:'hindustanTimes'})
    .then(data => {
        console.log('HindustanTimes')
        res.status(200).json({result:data});
    }).catch(err=>{
        console.log(err)
        res.status(500).json({err:err})
    })
    
})
//thequint
router.get('/theQuint',async function(req,res){
    // News.create({paper:"yo"})
    
    News.find({paper:'theQuint'})
    .then(data => {
        console.log('theQuint')
        res.status(200).json({result:data});
    }).catch(err=>{
        console.log(err)
        res.status(500).json({err:err})
    })
    
})

router.get('/theHindu',async function(req,res){
    
    News.find({paper:'theHindu'})
    .then(data => {
        console.log('Hindu')
        res.status(200).json({result:data});
    }).catch(err=>{
        console.log(err)
        res.status(500).json({err:err})
    })
})

//fav

router.get('/getFav',async function(req,res){
    // News.create({paper:"yo"})
    Favs.find().then(data=>{
        console.log("fav")
        res.status(200).json({result:data});
    }).catch(err=>{
        console.log(err)
    })
})
router.get('/readLater',async function(req,res){
    // News.create({paper:"yo"})
    Reads.find().then(data=>{
        console.log("rl")
        res.status(200).json({result:data});
    }).catch(err=>{
        console.log(err)
    })
})


router.post('/fav',async function(req,res){
    // News.create({paper:"yo"})
    var res = new Favs(req.body)
    res.save()
    .then(item => {
     console.log("item saved to database");
    })
    .catch(err => {
        console.log(err)
    });
    // console.log(req.body)
})
router.post('/read',async function(req,res){
    // News.create({paper:"yo"})
    var res = new Reads(req.body)
    res.save()
    .then(item => {
     console.log("item rl saved to database");
    })
    .catch(err => {
        console.log(err)
    });
    // console.log(req.body)
})


require('../db/conn');  
const User = require("../model/userSchema");

router.get('/',(req ,res) => {
    res.send('hello world router js');
});


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