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
            default:"",
        },
        description:{
            type:String,
            default:"Food provides essential nutrients for overall health and well-being"
        },
        category:{
            type:String,
            enum:["Salad","Rolls","Deserts","Sandwich","Cake","Pure Veg","Pasta","Noodles"],
            default:"Salad"
        }




    },{
        timestamps:true
    });
