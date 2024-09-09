import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
	const token = req.cookies.token;
	if (!token) return res.status(401).json({ success: false, message: "Unauthorized - no token provided" });
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) return res.status(401).json({ success: false, message: "Unauthorized - invalid token" });
		req.userId = decoded.userId;
		next();
	} catch (error) {
		console.log("Error in verifyToken ", error);
		return res.status(500).json({ success: false, message: "Server error" });
	}
};


export const adminRoute = async (req, res, next) => {
	try {
		const user = await User.findById(req.userId);
	if (! user) {
		return res.status(400).json({ success: false, message: " User not founded " })
	}
	if (! user.isAdmin){
		return res.status(500).json({ success: false, message: " you are not Admin " })
	}
	next()		
	} catch (error) {
		res.status(400).json({success:false,message:error.message} )
	}

};