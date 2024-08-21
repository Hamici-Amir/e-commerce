import bcrypt from "bcryptjs"


import { User } from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";
import { sendVerficationEmail } from "../mailtrap/emails.js";








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
        sendVerficationEmail(user.email,verificationToken)

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
    console.log(req.body);
    console.log("hhhhh");
    res.send("hhhh")
}

export const logout = async () => {


}