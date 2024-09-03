import { Post } from "../models/post.model.js"
import {User} from "../models/user.model.js"
import cloudinary from "../lib/cloudinary.js";

export const createPost  = async (req,res) => {
    const {name,price,description,category,image} = req.body;
    
    try {
        let cloudinaryResponse = null;

		if (image) {
			cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "products" });
        }
        const user = await User.findById(req.userId);
        if (! user) {
            return res.status(400).json({ success: false, message: " User not founded " })
        }
        if (! user.isAdmin){
            return res.status(500).json({ success: false, message: " you are not Admin " })
        }

        const post = new Post({
            name,
            price,
            description,
            category,
            imgae:cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : "",
        })    
        await post.save();
        res.status(200).json({
            success:true,
            message:'Posr created successfully',
            post:{
                ...post._doc,
				
            }
        })

    } catch (error) {
                res.status(400).json({success:false,message:error.message} )
    }
    

}