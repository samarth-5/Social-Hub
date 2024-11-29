import { Server } from "socket.io";
import http from "http";
import express from "express";
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		// methods: ["GET", "POST"],
		origin: process.env.FRONTEND_URL,
        credentials: true,
	},
});

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};
	
const userSocketMap = {};

io.on("connection", (socket) => {
	console.log("a user connected", socket.id);

	const userId = socket.handshake.query.userId;
	if (userId != "undefined") userSocketMap[userId] = socket.id;

	// io.emit() is used to send events to all the connected clients
	io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
		delete userSocketMap[userId];
		io.emit("getOnlineUsers", Object.keys(userSocketMap));
	});
});

export { app, io, server };