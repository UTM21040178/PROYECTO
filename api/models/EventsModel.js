import { Schema,Model, model } from "mongoose";

const EventSchema = new Schema({

    name:{
        type: String,
        required: true
     },

    metrics: [
        {

            description:{

                type: String,
                required: true
            },
            max_points:{
                type: Number,
                required: true
            }
        
        
        

        }


    ]
},
{
MaxRound:{
    type: Number,
    required: true
},
round:{
    type: Number,
    default:0
},

status:{
    type: String,
    enum: ["pending","active","done"],
    lowercase: true,
    default: "pending"
},




},
{

    groups:[id_equipos]
},
{
    judges:[id_usuarios]
}



);

export const EventModel = model("events",EventSchema)