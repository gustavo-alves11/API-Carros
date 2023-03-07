import express  from "express";
import MarcaController from "../controllers/marcasController.js";

const router = express.Router();


router
    .get("/marcas", MarcaController.listarMarcas)
    .get("/marcas/:id", MarcaController.listarMarcaPorId)
    .post("/marcas", MarcaController.cadastrarMarca)
    .put("/marcas/:id", MarcaController.atualizarMarca)
    .delete("/marcas/:id", MarcaController.excluirMarca)

export default router


// id de marcas:
// 63ecd071394231a6312fcd83   VW
// 63ecd0a3394231a6312fcd85   Ferrari
// 63ecd0c7394231a6312fcd87 Honda

