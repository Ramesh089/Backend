import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

dotenv.config({
    path:"./env"
});

const DBConnect = async ()=>{
    try {
        const connectInstance = await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`);
        console.log(`the datbase is connected ${connectInstance.connection.host}`);
        
    } catch (error) {
        console.log("connect failed",error);
        
    }
}


export default DBConnect;