import mongoose from "mongoose";

const userSignUp = new mongoose.Schema({
    name: {
        type : String,
        required : true,
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        unique : true,
        required : true
    }
})

const user = mongoose.model('register', userSignUp)

export {user}