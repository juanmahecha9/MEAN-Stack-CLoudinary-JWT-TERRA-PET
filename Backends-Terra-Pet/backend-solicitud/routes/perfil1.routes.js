const express = require('express');
const PerfilControl = require('../controller/perfil1.controller')
const api = express.Router();

   /* rutas */
   
   api.get('/perfil1',PerfilControl.getPerfil);
   api.put('/actualizarP',PerfilControl.perfilActualizado)
   api.delete('/perfildelete/:id',PerfilControl.eliminarPerfil);
   module.exports =
     api;
   