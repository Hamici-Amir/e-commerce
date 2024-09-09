// nodejs packages 
import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";


// Data base 
import { connectDB } from "./lib/connectDB.js";

// Routes
import AuthRouter from "./routes/Auth.route.js";
import PostRouter from "./routes/Post.route.js";


dotenv.config();
const app = express();
const port = process.env.port || 5000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser()); // allows us to parse incoming cookies


app.use("/api/auth/",AuthRouter);
app.use("/api/posts",PostRouter);





app.listen(port,() => {
    connectDB();
    console.log(`http://localhost:${port}/`);
})