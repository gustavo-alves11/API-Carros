import express  from "express";
import CarroController from "../controllers/carrosController.js";


const router = express.Router();


router
    .get("/Carros", CarroController.listarCarros)
    .get("/Carros/:id", CarroController.listarCarroPorId)
    .post("/Carros", CarroController.cadastrarCarro)
    .put("/Carros/:id", CarroController.atualizarCarro)
    .delete("/Carros/:id", CarroController.excluirCarro)

export default router