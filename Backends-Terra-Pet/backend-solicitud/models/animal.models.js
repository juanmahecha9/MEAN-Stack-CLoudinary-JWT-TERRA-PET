const mongoose= require('mongoose');
const Schema= mongoose.Schema;

var AnimalSchema= new Schema({
    nombre: String,
    descripcion: String,
    region: String
});

module.exports= mongoose.model('Animal', AnimalSchema)
