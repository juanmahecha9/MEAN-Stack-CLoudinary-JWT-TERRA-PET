const Carrito = require('../models/carrito.models')
const createData = async (req, res) => {
    // CREAR
    
    const { name, descripcion, region } = req.body; //parametros que el envian solicitudes
    /* antes: todos los mascota eran "carrito" */
    let mascota = new Carrito({ name, descripcion, region }); // Acceder al modelo de mongoDB y se guarda en un avariable para acceder a cada key del objeto

    mascota.save((err, animalNuevo) => {

        if (err) {
            res.status(500).send({ message: "error en el servidor bitch" });
        } else
            if (!animalNuevo) {
                res.status(200).send({ message: "no fue posible realizar el registro" });
            } else {
                res.status(200).send({
                    status: 'Producto  nuevo',
                    animal: animalNuevo
                });
            }
    })
}

/* antes getData() */
 function obtenerAnimales(req, res){
    Carrito.find((err, animalesEncontrados) => {
        if (err) {
            res.status(500).send({message:"error en el servidor"});
        }else{
            if(!animalesEncontrados){
                res.status(200).send({message:"no fue posible ver bitch"});
            }else {res.status(200).send({
                status: 'animales Encontrados',
                producto: animalesEncontrados
            
            });
        }
    }
    })
}

function matarAnimal(req,res){
    let animalid=req.params.id;
    Carrito.findByIdAndDelete(animalid,(err,animalAsesinado)=>{
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
const aniquilarAnimales = async (req, res) => {
    //VISUALIZAR
    
     //acceder a la informacion y usar la funcion find busca error  o los productos o datos que encunetre en la DB
     // se accede a la base de datos directamente
     await Carrito.remove((err, animalesEncontrados) => {
       if (err) {
         res.status(500).send({
           message: "Server error ",
         });
       } else {
         if (!animalesEncontrados) {
           res.status(200).send({
             message: "No fue posible encontrar los registros",
             statusCode: 400,
           });
         } else {
           res.status(200).send({
             status: "Productos encontrados",
             producto: animalesEncontrados,
             statusCode: 200,
           });
         }
       }
     });
   }
   
module.exports = { createData, obtenerAnimales, matarAnimal, aniquilarAnimales}