import { Schema,Model, model } from "mongoose";

const EventSchema = new Schema({

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
round:{
    type: Number,
    required: true
},

status:{
    type: String,
    enum: ["pending","active","done"],
    required: true
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