const express = require("express");
//Funciones de las  del controlador
const control = require("../controller/adoptate.controller");

const router = express.Router(); //configurar las rutas que se van a usar

//Prueba del servicio y las rutas
router.get("/pruebaSa", control.prueba);

//Datos usuario
//Crear la ruta para el control Crear datos y llamar la funcion en especifico de ese documento
router.post("/newa", control.createData);
//obtner o mostrar los datos de la BD
router.get("/newa", control.showData);
//actualizar datos de la BD
router.put("/actualizara/:id", control.upgradeData);
//eliminar datos de la Db
router.delete("/borrara/:id", control.delateData);


module.exports = router;
//exportar las rutas
