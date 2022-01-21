const mongoose=require("mongoose")

// CREATE SCHEMA FOR USER
const userSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    gender:{
        type:String
    },
    status:{
        type:String
    }
})

const Users=mongoose.model("users",userSchema)
module.exports=Users;