import mongoose from "mongoose"

const UserShema = new mongoose.Schema({
  Username:{
    Username:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    Email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"]

    }
  }
},{timestamps:true})


export const User = mongoose.model("User",UserShema)