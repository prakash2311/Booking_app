import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


const app = express();
dotenv.config()


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb")
      } catch (error) {
        throw error;
      }
};

mongoose.connection.on("disconnected", () =>{
    console.log("mongodb disconnected")
})


app.listen(3000, () => {
    connect()
    console.log("connected to backend..");
});