import express from "express";
import { login, logout, register, verify } from "../controller/user.controller.js";
import { authenticate } from "../middleware/authorize.js";

const router = express.Router();

router.post("/signup", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/verify" ,authenticate,verify);
export default router;
