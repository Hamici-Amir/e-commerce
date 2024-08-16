// nodejs packages 
import express from "express"
import dotenv from "dotenv";



// Data base 
import { connectDB } from "./db/connectDB.js";

// Routes
import AuthRouter from "./routes/Auth.route.js";



dotenv.config();
const app = express();
const port = process.env.port || 5000;

app.use(express.json());


app.use("/api/auth/",AuthRouter);






app.listen(port,() => {
    connectDB();
    console.log(`http://localhost:${port}/`);
})
