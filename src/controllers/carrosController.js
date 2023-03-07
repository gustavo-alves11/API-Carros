import Carros from "../Models/Carros.js";


class CarroController{

    static listarCarros = (req, res) => {  //req é sempre o que vai vir de dados pela url, res é a resposta
        Carros.find((err, Carros)=>{
        if(!err){
            res.status(200).json(Carros)
        }else{
            res.status(400).send({message:`${err.message} -Não foi possivel encontrar nenhum registro`})
        }
        })
    }

    static listarCarroPorId = (req, res) => {
        const id = req.params.id
        
        Carros.findById(id, (err, Carros)=>{// findById retorna um erro ou registro determinado pelo id
            if(!err){
                res.status(200).json(Carros)
            }else{ //se ocorrer erro:
                res.status(400).send({message: `${err.message} - Id não localizado`})
            }
        })

    }

    static cadastrarCarro = (req, res) => {
        let Carro = new Carros(req.body);
        Carro.save((err)=>{
            if(err){ // se ocorrer erro:
                res.status(400).send({message:`${err.message}- Não foi possivel cadastrar o Carro`})
            }else{ //se não vai mandar carro convertido para Json
                res.status(201).send(Carro.toJSON())
            }
        })
    }

    static atualizarCarro=(req, res) => {
        const id = req.params.id;
        Carros.findByIdAndUpdate(id, {$set:req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: 'Carro Atualizado com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }

        })
    }
    static excluirCarro = (req, res) =>{
        const id = req.params.id;
        Carros.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({message: 'Carro Atualizado com sucesso'})
            }else{
                res.status(500).send({message: err.message})
            }
        })

    }


}

    export default CarroController


