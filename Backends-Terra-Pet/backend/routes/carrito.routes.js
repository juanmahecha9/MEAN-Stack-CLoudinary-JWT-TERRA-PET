/* requiere rutas */
const express = require('express');
const carritoControl = require('../controller/carritocontroler')
const api = express.Router();

/* rutas */
api.post('/agregaranimal', carritoControl.createData);
api.get('/mostrar',carritoControl.obtenerAnimales);
api.delete('/asessinar/:id',carritoControl.matarAnimal);
api.delete('/aniquilar',carritoControl.aniquilarAnimales);
module.exports =
  api;
