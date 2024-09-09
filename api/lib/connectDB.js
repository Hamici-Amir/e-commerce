import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        
        const Url = process.env.mongodb_Url;
        const connection = await mongoose.connect(Url)
        console.log(`connected Sucessfully: ${connection.connection.host} `)

    } catch (error) {
            console.log("Error",error.message);
            process.exit(1);
    }
}