const express = require('express');

const app = express();

app.use(logger);

// for books path;
app.get("/books", function (req, res) {
    res.send({
        route : '/books',
    })
})

// checkPermission is middleware for authors and libraries;
app.use(checkPermission);

app.get("/libraries", function (req, res) {
    return res.send({ 
        route : '/libraries',
        permission : true
    })
})


app.get("/authors", function (req, res) {
    return res.send({ 
        route : '/authors',
        permission : true
    })
})
function logger(req, res, next) {
    if(req.path === "/books" || req.path === "/libraries" || req.path === "/authors") {

      console.log(req.path)
    }
    next();
}

// middleware function
function checkPermission(req, res, next){
    if(req.path === "/libraries"){
        return res.send({ 
            permission : true
        })
    }
    else if(req.path === "/authors"){
        return res.send({ 
            permission : true
        })
    }
    next()
}
app.listen(5100, () =>{
    console.log("port is ready");
});



