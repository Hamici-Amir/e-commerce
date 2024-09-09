import bcrypt from "bcryptjs"


import { User } from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";
import { VerifyEmail } from "../nodemailer/email.js";








export const signUp = async (req,res) => {
    const {email,name,password} =  req.body;
    try {
        if(!email || !name || !password){
            throw Error("All fields are required");
        }   
        const existUser = await User.findOne({email});
        if(existUser){
            return res.status(400).json({success:false,message: "email already exists"})
        }
        const userName = await User.findOne({name});
        if(userName){
            return res.status(400).json({success:false,message: "user name already exists"})

        }

        const hashPassword = await bcrypt.hash(password,15);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();


        const user = new User({email,
            name,
            password:hashPassword,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 10 * 60 * 1000 // 24 hours
        });

        await user.save();

        generateTokenAndSetCookie(res,user._id);
      //  sendVerficationEmail(user.email,verificationToken)
         VerifyEmail(user.email,verificationToken);  

        res.status(200).json({
            success:true,
            message:'User created successfully',
            user:{
                ...user._doc,
				password: undefined,
            }
        })


    } catch (error) {
        
        res.status(400).json({success:false,message:error.message}   )

    }

}

export const verifyEmail = async  (req,res) => {
    const {code }  = req.body;
   try {
    const user = await User.findOne({
        verificationToken:code,
        verificationTokenExpiresAt:{ $gt:Date.now() }
    })
    if(!user) {
        return res.status(400).json({success:false,message:" Invalid or expired verfication code"});
    }
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;

    await user.save();
    res.status(200).json({
        success:true,
        message:'User created successfully',
        user:{
            ...user._doc,
            password: undefined,
        }
    })

   } catch (error) {
    res.status(400).json({success:false,message:error.message}   )

   }

}






export const login = async (req,res) => {
    const {email,password} = req.body;
    try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}
		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(400).json({ success: false, message: "Invalid credentials" });
		}

		generateTokenAndSetCookie(res, user._id);

		user.lastLogin = new Date();
		await user.save();

		res.status(200).json({
			success: true,
			message: "Logged in successfully",
			user: {
				...user._doc,
				password: undefined,
			},
		});
	} catch (error) {
		console.log("Error in login ", error);
		res.status(400).json({ success: false, message: error.message });
	}





}

export const logout = async (req, res) => {
	res.clearCookie("token");
	res.status(200).json({ success: true, message: "Logged out successfully" });
};



export const checkAuth = async (req, res) => {
	try {
		const user = await User.findById(req.userId).select("-password");
		if (!user) {
			return res.status(400).json({ success: false, message: "User not found" });
		}

		res.status(200).json({ success: true, user });
	} catch (error) {
		console.log("Error in checkAuth ", error);
		res.status(400).json({ success: false, message: error.message });
	}
};