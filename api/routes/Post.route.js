import express from "express"
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router()


router.get("/posts",()=>{})
router.post("/create",verifyToken,(req,res) => {
        console.log(req.userId)    

});


export default router