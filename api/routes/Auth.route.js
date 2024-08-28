import express from "express";
import { checkAuth, login, logout, signUp, verifyEmail } from "../controllers/auth.contoller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();



router.post("/login",login)
router.post("/verify-email",verifyEmail)

router.post("/sign-up",signUp);


router.post("/logout",logout);
router.get("/check-auth",verifyToken, checkAuth);


export default router;
