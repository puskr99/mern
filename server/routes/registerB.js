var express = require('express');
var router = express.Router();
var Collects = require('../models/userSchema');

/* POST registerB page. */
router.post('/', async (req, res) => {
  
  const {email,password,cpassword} = req.body;

  if(!email || !password || !cpassword){
    return res.status(420).json({error:"FIll all the fields properly"});
  }
  if(password !== cpassword){
    return res.status(421).json({error:"Password dont match."});
  }

  try{
    const userExists = await Collects.findOne({email:email});

    if(userExists){
      return res.status(422).json({error:"Email already exists"});
    }

    const newUser = new Collects({email,password,cpassword});

    const saveUser = await newUser.save();
    if(saveUser)
    {
      return res.status(201).json({message:"User registered successfully"});
    }
    
  }
  catch(err){
    console.log(err)
  }


});

module.exports = router;
