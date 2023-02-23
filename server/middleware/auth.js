var jwt = require('jsonwebtoken');
var express = require('express');

const key = 'puskar.nub';

const verifyToken =  (req,res,next)=>{

    const token = req.cookies['jwtoken'];
    console.log(token);

    if(token)
    {
        jwt.verify(token,key,(err,decoded)=>{
            if(err) return res.status(402).json({
                error:"Failed to authenticate"
            })

            next()
        })
    }else{
        res.status(401).json({error:"Invalid Token"})
    }
}

module.exports = verifyToken;