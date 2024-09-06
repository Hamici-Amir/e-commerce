import { Post } from "../models/post.model.js"
import cloudinary from "../lib/cloudinary.js";

export const createPost  = async (req,res) => {
    const {name,price,description,category,image} = req.body;
    
    try {
        let cloudinaryResponse = null;

		if (image) {
			cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "products" });
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