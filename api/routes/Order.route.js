import express from "express"
import {  adminRoute, verifyToken } from "../middleware/verifyToken.js";
import { createOrder, getOrders } from "../controllers/order.controller.js";


const router = express.Router()


router.post("/create",verifyToken,createOrder);
router.get("/getOrders",verifyToken,adminRoute,getOrders)



export default router