const express  = require("express");
const mongoose = require("mongoose");  
const app = express();

const connect = () =>{

return mongoose.connect(" mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb");


};

// User Model

const userModel = new mongoose.Model({

firstName:{type:String, required: true},
lastName: {type:String, required: false},
age:{type:Number, required:true, Range:1-150},
email: {type:String, required: true, unique:true},

timeStamp:{type:String, required: true},



});

// Book Model

const bookModel = new mongoose.Model({

likes:{type:Number, default:0},
coverImage: {type:String, required: true, unique:true},
content:{type:String, required: true},
timeStamp:{type:String, required: true},


});

//Publication Model

const publicationModel = new mongoose.Model({

    name:{type:String, required: true},

    timeStamp:{type:String, required: true},
    
});

// Comment Model

const commentModel = new mongoose.Model({

body:{type: String, required: true},
timeStamp:{type:String, required: true},

});

module.exports = app;





