import express from "express";
import { getMessages, sendMessage } from "../Controllers/messageController.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/:id",verifyToken,getMessages);
router.post("/send/:id",verifyToken,sendMessage);

export default router;