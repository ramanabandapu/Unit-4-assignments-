const express = require("express");

const app = express();

// API creation

app.get("", (req, res)=>{
res.send({
    Hello:"Hello",
})
});

// API creation
app.get("/books", function(req,res){
    res.send({

        book1: "physics",
 
    })
 
 });

 
module.exports = app;









