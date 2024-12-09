import { Schema, model, Model } from "mongoose";

const TeamSchema = new Schema ({



 name:{
    type: String,
    required: true
 },

 members:[],


leader:{
    type: String
    ,
        required: true

},

round:{
    type: Number
    ,
    default:0
},

grades:[]







})

export const TeamsModel = model("Teams",TeamSchema)