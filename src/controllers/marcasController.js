import Marcas from "../Models/Marca.js";


class MarcaController{

    static listarMarcas = (req, res) => {  //req é sempre o que vai vir de dados pela url, res é a resposta
        Marcas.find((err, Marcas)=>{
        if(!err){
            res.status(200).json(Marcas)
        }else{
            res.status(400).send({message:`${err.message} -Não foi possivel encontrar nenhum registro`})
        }
        })
    }

    static listarMarcaPorId = (req, res) => {
        const id = req.params.id
        
        Marcas.findById(id, (err, Marcas)=>{// findById retorna um erro ou registro determinado pelo id
            if(!err){
                res.status(200).json(Marcas)
            }else{ //se ocorrer erro:
                res.status(400).send({message: `${err.message} - Id não localizado`})
            }
        })

    }

    static cadastrarMarca = (req, res) => {
        let Marca = new Marcas(req.body);
        Marca.save((err)=>{
            if(err){ // se ocorrer erro:
                res.status(400).send({message:`${err.message}- Não foi possivel cadastrar o Marca`})
            }else{ //se não vai mandar Marca convertido para Json
                res.status(201).send(Marca.toJSON())
            }
        })
    }

    static atualizarMarca=(req, res) => {
        const id = req.params.id;
        Marcas.findByIdAndUpdate(id, {$set:req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: 'Marca Atualizada com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }

        })
    }
    static excluirMarca = (req, res) =>{
        const id = req.params.id;
        Marcas.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({message: 'Marca Atualizado com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }
        })

    }


}

    export default MarcaController


