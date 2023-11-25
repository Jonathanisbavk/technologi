//Lamada a los paquetes
const express = require("express")
const mongoose = require("mongoose")
const pagos = require("./routes/pagos-facturas")
require("dotenv").config()

//Configuraciones
const aplicacion = express();
const puerto = 3000;


//rutas
aplicacion.get(
    "/prueba", (req, res) => {res.send ("Pagina de prueba")}
)
aplicacion.get (
    "/", (req, res) => {res.send ("Pagina de Raiz")}
)
aplicacion.use(
    "/api", pagos
);

//Ejecucion
mongoose.connect(process.env.mongodb_conexion)
    .then(() => {console.log("Conexion realizada")})
    .catch((error) => {console.log(error)})
    

aplicacion.listen(puerto, () => { console.log("Aplicacion ejecutandose")})