import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
import { getUserForSidebar } from "../Controllers/userController.js";

const router=express.Router();

router.get("/",verifyToken,getUserForSidebar);

export default router;