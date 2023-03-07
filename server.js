/// ARQUIVO QUE VAI SER EXECUTADO

import app from "./src/app.js";
const port = 3000;


app.listen(port, () => {
    console.log(`Servidor executando em  http://localhost:${port}`)
})