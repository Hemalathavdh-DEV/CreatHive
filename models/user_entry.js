//Requiring Mongoose
const mongoose = require("mongoose");
//Creating Schema
var userEntrySchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    contact_number: {
        type: Number,
        unique: true,
        required: true,
    },

    password: {
        type: String,
        required: true
    },
    admin: Boolean,
    // created_at: Date,
    // updated_at: Date
});

//Creating model for the Schema
var userEntry = mongoose.model('UserEntry', userEntrySchema);
//Exporting our model module
module.exports = userEntry;
