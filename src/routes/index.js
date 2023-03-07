/// Todas as rotas seram centralizadas aqui

import express  from "express";
import carrosRoutes from "./carrosRoutes.js"
import marcasRoutes from "./marcasRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res)=> {
        res.status(200).send({titulo: "Curso de node APIs"})
    })

    app.use(
        express.json(),
        carrosRoutes,
        marcasRoutes
    )
}

export default routes