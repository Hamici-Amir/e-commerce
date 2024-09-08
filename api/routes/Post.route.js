import express from "express"
import { adminRoute, verifyToken } from "../middleware/verifyToken.js";
import { createPost, getPost } from "../controllers/post.contoller.js";

const router = express.Router()


router.get("/",getPost)
router.post("/create",verifyToken,adminRoute,createPost);


export default router