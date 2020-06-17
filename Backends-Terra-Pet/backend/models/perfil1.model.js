const mongoose= require ('mongoose')
const perfil1Schema=mongoose.Schema;

const perfil = new perfil1Schema(
  {
    name: String,
    descripcion:  String,
    region: String,
      
    }

  
);

module.exports = mongoose.model("perfil1",perfil)