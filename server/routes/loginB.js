var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Collects = require('../models/userSchema');
const key = 'puskar.nub'

/* POST login page. */
router.post('/', async (req, res)=> {
    try{
  const { email, password }= req.body;
  if(!email || !password){
    return res.status(420).json({error:"Fill all the fields properly"});
  }

  const userExists = await Collects.findOne({email:email , password:password});
  if(userExists){

    const payload ={
      id:userExists._id,
      email:userExists.email
    }

    jwt.sign(
      payload,
      key,
      {expiresIn:86400},
      (err,token)=>{
        if(err) return res.status(423).json({message:err})

        res.cookie("jwtoken",token,{
          expiresIn: new Date(Date.now()+5*86400),
          httpOnly:true
        })
        // console.log(token)
        return res.status(201).json({
          message:"Success",
          token:"User"+token
        })
      }
    )

  }
  if(!userExists){
    return res.status(422).json({error:"User doesn't exist"});
  }
  
}
catch(err){
    console.log(err)
}

})

module.exports = router;
