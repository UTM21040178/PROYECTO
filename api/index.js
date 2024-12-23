import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UsersController from "./controllers/UsersController.js";
import EventsController from "./controllers/EventsController.js";
import TeamsController from "./controllers/TeamsController.js";
dotenv.config();


const app = express()
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("conexion exitosa"))



app.use (cors())
app.use(helmet())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("hola desde mi servidor")
})

app.listen (4000,()=>console.log("server is running"))
app.get("/User/list",UsersController.getUsers)
app.get("/event/list",EventsController.getEvents)
app.get("/teams/list",TeamsController.getTeams)
app.post("/user/register",UsersController.register)
app.post("/user/login",UsersController.login)
app.put("/user/update-profile/:id",UsersController.updateProfile)
app.post("/event/create",EventsController.createEvent)

app.post("/event/create",EventsController.createEvent)

app.post("/event/:idEvent/:idTeam")

