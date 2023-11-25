const express = require("express")
const router = express.Router();
const pagosModel = require("../models/usuarios")

//getF
router.get("/usuarios", (req, res) => {
    pagosModel.find ()
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
});  //recibe dos parametros la ruta (consulta) y la funcion a ejecutar


//get con id
router.get("/usuarios/:id", (req, res) => {
    const {id} =req.params;
    pagosModel.findById (id)
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
})

// POST
router.post("/usuarios", (req, res) => {
    const facturas = new pagosModel(req.body);
    facturas.save()
    .then((data) => res.json({mensaje: "Guardado correctamente"}))
    .catch((error) => res.json({mensaje: error}))
});


// PUT
router.put("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const { dni, edad, nombre, apellido, sexo, correo } = req.body;
    pagosModel.updateOne({_id: id}, {$set:{dni, edad, nombre, apellido, sexo, correo}})
    .then((data) => res.json({mensaje: "Actualizado correctamente"}))
    .catch((error) => res.json({mensaje: error}))
});


//DELETE

router.delete("/usuarios/:id", (req, res) => {
    const {id} =req.params;
    pagosModel.deleteOne ({_id:id})
    .then((data) => res.json({mensaje: "Objeto eliminado"}))
    .catch((error) => res.json({mensaje: error}))
})


module.exports = router