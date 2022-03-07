const express = require("express");
const app = express();

app.use(logger);
app.use(checkPermission);

function logger(req, res, next){
    console.log("logger")
    next();
}

app.get("/books", (req,res)=> {
    return res.send({route: "/books"});
});

function checkPermission(req, res, next){
    console.log(" Check Permission")
    next();
}

app.get("/libraries", (req,res)=>{
   return res.send({route: "/libraries", permission:"true"}) 
});

app.get("/authors", (req,res) => {
    return res.send({route: "/authors", permission:"true"}) 
 });