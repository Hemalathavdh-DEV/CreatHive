const userEntry = require('../models/user_entry'); //Importing user_entry model
const bcrypt = require('bcrypt');
const _ = require('lodash');
const express = require('express');
const userEntryRouter = express.Router();

userEntryRouter.post('/', async(request, response)=>{
    let user = await userEntry.findOne({email: request.body.email});
    if(user){
        return response.status(400).send("User Already Exists");
    }else{
        user = new userEntry(_.pick(request.body,["username","email", "contact_number", "password","admin" ]));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        response.send(user);
    }
});
module.exports = userEntryRouter;
