const express = require("express")
const router = express.Router();
const pagosModel = require("../models/pagos-facturas")

//getF
router.get("/pagos-facturas", (req, res) => {
    pagosModel.find ()
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
});  //recibe dos parametros la ruta (consulta) y la funcion a ejecutar


//get con id
router.get("/pagos-facturas/:id", (req, res) => {
    const {id} =req.params;
    pagosModel.findById (id)
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
})

//post
router.post("/pagos-facturas", (req, res) => {
    const facturas = pagosModel(req.body);
    pagos.save()
    .then((data) => res.json({mensaje: "Guardado correctamente"}))
    .catch((error) => res.json({mensaje: error}))
});


//put
router.put("./pagos-facturas/:id", (req, res) => {
    const {id} =req.params;
    const {cliente, tipo_servicio, fecha, monto, estado} = pagosModel(req.body);
    pagos.save()
    pagosModel.updateOne({_id:od}, {$set:{cliente, tipo_servicio, fecha, monto, estado}})
    .then((data) => res.json({mensaje: "Actualizado correctamente"}))
    .catch((error) => res.json({mensaje: error}))
});


//delete

router.delete("/pagos-facturas/:id", (req, res) => {
    const {id} =req.params;
    pagosModel.deleteOne ({_id:id})
    .then((data) => res.json({mensaje: "Objeto eliminado"}))
    .catch((error) => res.json({mensaje: error}))
})


module.exports = router