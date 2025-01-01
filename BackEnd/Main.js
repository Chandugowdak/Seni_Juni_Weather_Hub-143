const express = require('express'); //ACCESS THE EXPRESS FRAMEWORK
const mongoose = require('mongoose'); //STORE THE DATA
const cors = require('cors'); //HANDEL DATA
const app = express(); //CREATE AN INSTANCE OF THE EXPRESS FRAMEWORK
app.use(cors()); //USE CORS
app.use(express.json()); //USE JSON
const Register_Model = require('./Models/Registration'); //IMPORT THE MODEL FROM REGISTRATION.JS
const bcrypt = require('bcrypt'); //IMPORT BCRYPT

mongoose.connect('mongodb://localhost:27017/PriceLoom')
.then(()=>{console.log("Connected")})
.catch((err)=>console.log(err));


app.post('/register' , async(req,res)=>{
    try{
  const data = await Register_Model.create(req.body)
  res.status(200).json({ message: "Registration successful." });
  console.log(data)
    }catch(err){
        res.status(500).json({ message: "Registration failed." });
    }

})

app.post('/login' , async (req,res)=>{
    
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message:"Please Enter All The Section"})
    }
    try{
    const user = await Register_Model.findOne({email:email});
    if(!user){
        res.status(404).json({message: "User Not Found"});
    }else{
         if(user.password === password){
           return  res.status(200).json({message:"Success"})
         }else{
            res.status(200).json({message:"Invalid Password"})
         }
}
}
    catch(err){
        return res.status(500).json({message: "Login Failed"});
    }
   
})

app.listen(3000,()=>{
    console.log(`Server is running in the portel ${3000}`);
})