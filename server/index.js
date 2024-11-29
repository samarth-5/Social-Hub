import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from "cors";

import authRoutes from "./Routes/authRoutes.js";
import messageRoutes from "./Routes/messageRoutes.js";
import userRoutes from "./Routes/userRoutes.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
        .then(()=>{ console.log("Database connected!!"); })
        .catch((err)=>{ console.log(err) }); 

const PORT = process.env.PORT;

import { app, server } from "./socket/socket.js";
app.use(cors());

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}!!`);
});

app.get("/test",(req,res,next)=>{
    return res.send("Hello");
});