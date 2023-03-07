import mongoose from "mongoose";
import Marcas from "./Marca.js";


const carrosSchema = new mongoose.Schema(
    {
        id: { type: String},
        nome: {type: String, required:true},
        marca: {type : mongoose.SchemaTypes.ObjectId, ref:'marcas', required: true},
        ano: {type: Number, required:true}


    }
)

const Carros = mongoose.model('Carros', carrosSchema)

export default Carros;