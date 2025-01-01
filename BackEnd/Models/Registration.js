const mongoose = require('mongoose');


const Register_Scheme = mongoose.Schema({
    username:{type:String, 
        required:true },

    email:{type:String,
        required:true},

    password:{type:String,
        required:true},
    
})

const Registration_Model = mongoose.model('Register_Model' , Register_Scheme);

module.exports = Registration_Model;