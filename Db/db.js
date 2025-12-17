//we will handle connectivity between mongodb and express here
//const mongoose = require('mongoose'); commonjs

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDb = () => {
try{
    //'mongodb://127.0.0.1:27017//sece_todo'
    mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected successfully");
} catch(err){
        console.error(err);
    }
}
     
export default connectDb;