import express from "express";
import { login, logout, signUp, verifyEmail } from "../controllers/auth.contoller.js";

const router = express.Router();



router.post("/login",login)
router.post("/verify-email",verifyEmail)

router.post("/sign-up",signUp);


router.post("/logout",logout);

export default router;
