const { Timestamp } = require("bson");
const mongoose = require("mongoose");

const app = express();

const connect = () =>{

    return mongoose.connect(

    "mongodb+srv://dhaval:dhaval_123@cluster0.ljuvz.mongodb.net/web14?retrywrites=true&w=majority"

    );
};

// USER Schema 

const userSchema = new mongoose.Schema({

    firstName:{ type: String, required: true},
    lastName : { type: String, required: true},
     age : { type: Number, required: true},
     email: { type: String, required: true},
     address: { type: String, required: true},
     createdAt:{ type: Timestamp, required: true},
     updatedAt: { type: Timestamp, required: true},
})

// BranchDetail Schema

const branchSchema = new mongoose.Schema({

    name:{ type: String, required: true},
    address: { type: String, required: true},
    IFSC: { type: String, required: true},
    MICR: { type: Number, required: true},
    createdAt:{ type: Timestamp, required: true},
    updatedAt: { type: Timestamp, required: true},

})

// MasterAccount Schema 

const masterAccSchema = new mongoose.Schema({

    balance:{ type: Number, required: true},
    createdAt:{ type: Timestamp, required: true},
    updatedAt: { type: Timestamp, required: true},

})


// SavingsAccount Schema

const savingsAccSchema = new mongoose.Schema({

    account_number:{ type: Number, required: true},
    balance:{ type: Number, required: true},
    interestRate: { type: String, required: true},
    createdAt:{ type: Timestamp, required: true},
    updatedAt: { type: Timestamp, required: true},


})


// FixedAccount Schema

const fixedAccSchema  =  new mongoose.Schema({

    account_number:{ type: Number, required: true},
    balance:{ type: Number, required: true},
    interestRate: { type: String, required: true},
    startDate: { type: Timestamp, required: true},
    maturityDate:{ type: Timestamp, required: true},
    createdAt:{ type: Timestamp, required: true},
    updatedAt: { type: Timestamp, required: true}


})





app.listen(5000, async()=>{
    try{
        await connect();
    }
    catch(err){
        console.log(err);
    }

    console.log("listening on port 5000");
})