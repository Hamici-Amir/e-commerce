import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
	{	
        name:{
            type:String,
            required:true,
        }  ,
        price:{
            type:Number,
            default:10
        },
        imgae:{
            type:String,
            default:"https://firebasestorage.googleapis.com/v0/b/blog-app-84202.appspot.com/o/menu_4.png?alt=media&token=23f509e5-3142-4800-80a1-bf150c301e09",
        },
        description:{
            type:String,
            default:"Food provides essential nutrients for overall health and well-being"
        },
        category:{
            type:String,
            enum:["Salad","Rolls","Deserts","Sandwich","Cake","Pure Veg","Pasta","Noodles"],
            default:"Sandwich"
        },
        rating:{
            type:Number,
            default:0
        },
        ratingNumber:{
            type:Number,
            default:0
        }



    },{
        timestamps:true
    });


export const Post = mongoose.model("Posts",postSchema);