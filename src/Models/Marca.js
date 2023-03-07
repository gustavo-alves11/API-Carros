import mongoose from "mongoose"; // importamos a lib de conexao com o db
const marcasSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidade: {type: String}

    },
    {
        versionKey: false
    }
)


const Marcas = mongoose.model('marcas', marcasSchema)
export default Marcas
