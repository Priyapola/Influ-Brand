import express from "express";
import userAuth from "../middleware/userAuth.js";
import { getUserData } from "../controllers/userController.js";

const userRouter = express.Router();

// ✅ Get user data if authenticated
userRouter.get("/data", userAuth, getUserData);

export default userRouter;
