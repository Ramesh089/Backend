import mongoose from "mongoose";
import express from "express"
import { DB_NAME } from "./constants.js";
// import dotenv from "dotenv"
import DBConnect from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();

const port = process.env.PORT || 3000;
// const app =express()

DBConnect()
.then(()=>{
 app.listen(port,()=>{
    console.log(`server is running on ${port}`)
 })
})
.catch((error)=>{
    console.log("the connection failed",error)
})

// app.listen(port,()=>{
//     console.log(`app is running on ${port}`)
// })





/*
const app=express();
dotenv.config();
const port = process.env.PORT || 3000
(async()=>{
    try {
        await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`);

        app.on("error",(error)=>{
            console.log("ERROR",error);
        })

        app.listen(port,()=>{
            console.log("app is running on ",port);
        })


    } catch (error) {
        console.log("connection failed ",error);
      
    }
})()
    */