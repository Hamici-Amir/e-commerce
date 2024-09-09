import { User } from "../models/user.model.js";


export const getAll = async (req,res) => {

    try {
        
        const limit = req.query.limit || 9;
        const startIndex = req.query.startIndex || 0;
        
        let sort = parseInt(req.query.sort) || null;
        
        if( sort ===-1){
            sort = {'lastLogin':sort}
        }else {
            sort = {date:1}
        }
        

        const searchTerm = req.query.searchTerm || "";
        const users = await User.find({ 
            ...(searchTerm && {
                    $or:[
                        {name:{$regex:searchTerm, $options:"i" }},
                        {
                    email:{$regex:searchTerm, $options:'i'}
                        }
                    ]

            }),



        }).skip(startIndex).limit(limit).sort(sort).select("-password")

        
        res.status(200).json({
            users
           });



    } catch (error) {
        res.status(400).json({
            scess:false,
            message:error.message
        })
    }



}


export const getOne = async (req,res) => {
try {
        const {name} = req.params;

        const user = await User.findOne({name}).select("-password").select("-isAdmin");

        if(!user){
            return res.status(400).json(
                {success:false,message: "user not founded"}
            );}

            res.status(200).json({
                success:true,
                message:'User goted successfully',
                user
            })


} catch (error) {
            res.status(400).json({success:false,message:error.message}   )

}






}

export const updateProfile = async (req,res) => {




}