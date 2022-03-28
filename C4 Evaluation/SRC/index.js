const express = require("express");
// const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");
// const { required } = require("nodemon/lib/config");


const app = express();


const router  =  express.Router();

router.get('', async(req, res)=>{
try {
    const user = await User.find().lean().exec();
    res.status(200).send(user)
} catch (error) {
res.status(401).send({message:error.message})
console.log(error)
}


})
 
router.post("", async(req,res)=>{
try {
    const user = await User.create(req.body);
    res.status(200).send(user);
} catch (error) {
    res.send(401).send({message: error.message})
    console.log(error);
}



})





app.use(express.json());


//User Model

const userSchema = new mongoose.Schema({
firstName:{type: String, required: true},
lastName: {type: String, required: false},

email: {type:String, required: true, unique:true},
password:{type:String, required: true},
timeStamp:{type:String, required: true},



});

const User = mongoose.model("user", userSchema);




// Todo model
const todoSchema = new mongoose.Schema({

    title:{type: String, required: true},
            
    timeStamp:{type:String, required: true},


})
const Todo = mongoose.model("todo", todoSchema);

module.exports = app;
module.exports  = router;


