const Perfil = require('../models/perfil1.model')

function getPerfil(req, res){
    Perfil.find((err, perfilesEncontrados) => {
        if (err) {
            res.status(500).send({message:"error en el servidor"});
        }else{
            if(!perfilesEncontrados){
                res.status(200).send({message:"no fue posible ver bitch"});
            }else {res.status(200).send({
                status: 'perfiles  Encontrados',
                producto: perfilesEncontrados
            
            });
        }
    }
    })
}
function actualizarPerfil(req, res) {
    var productoid = req.params.id;
    /* indico que uno de mis prametros para actualizar va ser  el ID*/
    var nuevosdatosPerfil = req.body;
    /* creamos una variable donde se va  recibir los datos nuevos */
    Producto.findByIdAndUpdate(productoid, nuevosdatosPerfil, (err, perfilActualizado) => {
        if (err) {
            res.status(500).send({ message: "error en el servidor" });
        } else {
            if (!perfilActualizado) {
                res.status(200).send({ message: "no fue posible actualizar", statusCode:400 })

            } else {
                res.status(200).send({
                    status: 'productos actualizado correctamente',
                    producto: nuevosdatosPerfil,
                    statusCode:200
                })
            }
        }

    })
}   

function eliminarPerfil(req,res){
    let perfil1id=req.params.id;
    Perfil.findByIdAndDelete(perfil1id,(err,animalAsesinado)=>{
        if (err){
            res.status(500).send({message:'error al guardar'});
        }else{
            if(!animalAsesinado){
                res.status(404).send({message:'no se pudo asesinar animal'});
            }else{
                res.status(200).send({
                    status:'Animal asesinado',
                    producto: animalAsesinado
                });
            }
        }
    })
}

module.exports = {  getPerfil,eliminarPerfil,actualizarPerfil}
