import express from "express"
import { verifyToken } from "../middleware/verifyToken.js";
import { createPost } from "../controllers/post.contoller.js";

const router = express.Router()


router.get("/posts",()=>{})
router.post("/create",verifyToken,createPost);


export default router