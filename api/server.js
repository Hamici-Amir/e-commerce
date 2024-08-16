// nodejs packages 
import express from "express"
import dotenv from "dotenv";



// Data base 
import { connectDB } from "./db/connectDB.js";

dotenv.config();
const app = express();
const port = process.env.port || 5000;






app.get("/:id",(req,res) => {
    
    res.send(`<h1>  ${req.params.id} </h1> `)
})

app.listen(port,() => {
    connectDB();
    console.log(`http://localhost:${port}/`);
})
