import express from "express"
import {  verifyToken } from "../middleware/verifyToken.js";
import { getAll, getOne, updateProfile } from "../controllers/user.controller.js";


const router = express.Router()


router.get("/:name",getOne)
router.get("/",verifyToken,getAll);
router.put("/update",verifyToken,updateProfile);


export default router