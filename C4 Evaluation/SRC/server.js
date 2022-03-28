const app = require('./index');


const connect = () =>{

    return mongoose.connect( "mongodb+srv://cluster0.cnatr.mongodb.net/myFirstDatabase" );
    
    };


app.listen(2500, async()=>{



    try {
        await connect();
    } catch (error) {
        console.log("error", error);
    }

    console.log("Listening to port 2500");
})




