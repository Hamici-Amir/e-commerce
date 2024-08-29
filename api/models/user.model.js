import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{	
		profilePic:{
				type:String,
				default:'https://avatar.iran.liara.run/public/boy?username=hatel'
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		lastLogin: {
			type: Date,
			default: Date.now,
		},
		isVerified: {
			type: Boolean,
			default: false,
		},
        isAdmin:{
            type:Boolean,
            default:false,
        },
		resetPasswordToken: String,
		resetPasswordExpiresAt: Date,
		verificationToken: String,
		verificationTokenExpiresAt: Date,
        
        
    },
	{ timestamps: true }
);

export const User = mongoose.model("User", userSchema);

