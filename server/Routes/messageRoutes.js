import express from "express";
import { getMessages, sendMessage } from "../Controllers/messageController.js";
//import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", getMessages);
router.post("/send/:id", sendMessage);

export default router;