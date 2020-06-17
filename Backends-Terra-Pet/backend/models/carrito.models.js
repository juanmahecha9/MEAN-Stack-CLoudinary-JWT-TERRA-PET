/* const mongoose= require ('mongoose')
const carritoSchema = mongoose.Schema;

const carrito = new carritoSchema(
  {
    name: String,
    descripcion:  String,
    region: String,
  }
);

module.exports = mongoose.model("carrito",carrito) */

const mongoose= require('mongoose');

const Schema = mongoose.Schema;

var CarritoSchema = new Schema({
    name: String,
    descripcion: String,
    region: String
});

module.exports= mongoose.model('Carrito', CarritoSchema)