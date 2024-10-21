import { Schema, model, Model } from "mongoose";

const TeamSchema = new Schema ({



 nombre:{
    type: String,
    required: true
 },

 id_participantes:[{
    type: Number
   ,
    required: true
}],


lider:{
    type:String
    ,
        required: true

},

ronda:{
    type: Number
    ,
        required: true
},

id_calificacion:{
     type: Number
    ,
        required: true
}







})

export const TeamsModel = model("Teams",TeamSchema)