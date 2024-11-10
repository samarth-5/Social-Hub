import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from "./Routes/authRoutes.js";
import messageRoutes from "./Routes/messageRoutes.js";
import userRoutes from "./Routes/userRoutes.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
        .then(()=>{ console.log("Database connected!!"); })
        .catch((err)=>{ console.log(err) }); 

const PORT = process.env.PORT || 5000;

const app=express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, ()=>{
    console.log('Server is running on port 5000!!');
});

app.get("/test",(req,res,next)=>{
    return res.send("Hello");
});