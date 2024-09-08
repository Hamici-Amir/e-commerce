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
            image:cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : "",
        })    
        await post.save();
        res.status(200).json({
            success:true,
            message:'Post created successfully',
            post:{
                ...post._doc,
				
            }
        })

    } catch (error) {
                res.status(400).json({success:false,message:error.message} )
    }
    

}

export const getPost =  async (req,res) => {

    try {
        const startIndex = parseInt(req.query.startIndex) || 0;
        const limit = parseInt(req.query.limit) || 15;


        const posts = await Post.find(  {
            ... (req.query.searchTerm  && {
                $or:[
                {
                    name:{ $regex:req.query.searchTerm, $options:"i" }
                },
           ]
            }  ),
            ...(req.query.category && {category:req.query.category}) ,
            ...(req.query.reserved && {Available:req.query.reserved})

     //     ...( req.user._id  && {autoecole:req.user._id  }  ),
    /*       ...(  req.query.accept == "false"  && {accepted:false}),*/
    //    ...(   req.query.accept  && {accepted:true}),
     //   ...(  !req.query.accept  && {accepted:false})



       }).skip(startIndex).limit(limit) 

       
       res.status(200).json({
               products:posts
              });


    } catch (error) {

        res.status(400).json({
            scess:false,
            message:error.message
        })
    }
}