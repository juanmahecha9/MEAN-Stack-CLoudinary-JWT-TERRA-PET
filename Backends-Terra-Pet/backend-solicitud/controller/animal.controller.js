const Animal = require('../models/animal.models');


const crearAnimal = async(req, res) => {

    const { nombre, descripcion, region } = req.body;
    const mascota =  new Animal({nombre, descripcion, region});

    await mascota.save((err, AnimalNuevo)=>{
        if(err){
            res.status(500).send({
                message: "Error en el servidor"
            });
        }else {
            if(!AnimalNuevo) {
                res.status(200).send({
                    message: "No fue posible realizar el registro", 
                    statusCode: 400 /* 18 mayo pto 13 */
                });
            } else {
                res.status(200).send({
                    status: 'Animal creado',
                    mascota: AnimalNuevo,
                    statusCode: 200 /* 18 mayo pto 13 */
                });
            } 
        }
    });
}


function obtenerAnimal(req, res) {

    Animal.find((err, animalesEncontrados)=>{
        if(err){
            res.status(500).send({
                message: "Error en el servidor"
            });
        }else {
            if(!animalesEncontrados) {
                res.status(200).send({
                    message: "No fue encontrar el producto",
                    statusCode: 400 /* 18 mayo pto 13 */
                });
            } else {
                res.status(200).send({
                    status: 'Animales encontrados',
                    mascota: animalesEncontrados,
                    statusCode: 200 /* 18 mayo pto 13 */
                });
            } 
        }
    })
}


module.exports= {
    crearAnimal,
    obtenerAnimal
}