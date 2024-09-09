import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{	
		profilePic:{
				type:String,
				default:'https://firebasestorage.googleapis.com/v0/b/blog-app-84202.appspot.com/o/_background.png?alt=media&token=eec1a47e-691b-412c-8069-877776cbf801'
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			unique:true,
		},
		name: {
			type: String,
			required: true,
			unique:true,

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

