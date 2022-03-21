const express = require("express");

const app = express();



app.get("/books", allBooks,(req,res)=>{

  console.log("Fetching all books");
})

module.exports = app;
