import { Schema, model, Model } from "mongoose";

const CalificacionSchema = new Schema({

id_Teams:{
    id_ronda:{
        type: Number,
        required: true
    }
},

id_Events:{
    

},

Calificaciones:[{

    id_metrica:{
        type: Number, 
        required: true
    },

    Calificacion:{
        type: Number,
        required: true
    }



}]

})