import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const app = express()
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("conexion exitosa"))



app.use (cors())
app.use(helmet())


app.get("/",(req,res)=>{
    res.send("hola desde mi servidor")
})

app.listen (4000,()=>console.log("server is running"))