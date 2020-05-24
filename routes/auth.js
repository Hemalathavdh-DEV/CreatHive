const config = require("config");
const bcrypt = require('bcrypt');
const _ = require('lodash');
const jsonWebToken = require('jsonwebtoken');
const userEntry = require('../models/user_entry'); //Importing user_entry model
const express = require('express');
const authRouter = express.Router();

authRouter.post('/',async(req,res)=>{
    let user = await userEntry.findOne({email: req.body.email});
    if(!user){
        return res.status(400).send("Incorrect Email or Password");
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword){
        return res.status(400).send("Incorrect Email or Password");
    }
    const AuthSuccesstoken = jsonWebToken.sign({_id:user._id}, config.get('PrivateKey'));
    res.send("Success");
});

module.exports = authRouter;