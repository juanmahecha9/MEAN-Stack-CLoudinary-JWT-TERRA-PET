const cloudinary = require("cloudinary");
const fs = require("fs-extra");
const foto = require("../models/model");
const cloud = require("../../config/config.cloud.json");
const { findById } = require("../models/model");

cloudinary.config({
  cloud_name: cloud.cloud.name,
  api_key: cloud.cloud.key,
  api_secret: cloud.cloud.secret,
});

const createData = async (req, res) => {
  const { title, description } = req.body;
  //Subir la imagen al servidor web de cloudinary
  const result = await cloudinary.v2.uploader.upload(req.file.path, {width:750, height: 750,crop:"scale"});
  const newPhoto = new foto({
    title,
    description,
    url: result.url,
    public_id: result.public_id,
  });

  await newPhoto.save();
 await fs.unlink(req.file.path);

  res.redirect('/');
};

const showData = async (req, res) => {
  //VISUALIZAR
  //acceder a la informacion y usar la funcion find busca error  o los productos o datos que encunetre en la DB
  // se accede a la base de datos directamente
  await foto.find((err, dataEncontrada) => {
    if (err) {
      res.status(500).send({
        message: "Server error ",
      });
    } else {
      if (!dataEncontrada) {
        res.status(200).send({
          message: "No fue posible encontrar los registros",
          statusCode: 400,
        });
      } else {
        res.status(200).send({
          status: "foto encontrados",
          producto: dataEncontrada,
          statusCode: 200,
        });
      }
    }
  });
};

function upgradeData(req, res) {
  //Actualizar
  let productosId = req.params.id;
  //incicar que uno de los parametros  para modificar va a ser el id
  // variable donde almacenar estos datos:
  let nuevosDatos = req.body;
  //control es la variale del modelo Buscar el objeto por el ID y actualizar
  //encontrar producto id o parametro, en conjutno con los nuevos datos, se crea una funcion error o actualizado
  //ese id lo creo mongo...
  foto.findByIdAndUpdate(productosId, nuevosDatos, (err, dataActualizada) => {
    if (err) {
      res.status(500).send({
        message: "Server error ",
      });
    } else {
      if (!dataActualizada) {
        res.status(200).send({
          message: "No fue posible actualizar",
          statusCode: 400,
        });
      } else {
        res.status(200).send({
          status: "foto actualizado",
          producto: nuevosDatos,
          statusCode: 200,
        });
      }
    }
  });
}

/* const delateData = async (req, res) => {
  const { id } = req.params;
  const FOTO = await foto.findByIdAndDelete(id);
  const result = await cloudinary.v2.uploader.destroy(FOTO.public_id);
  console.log(result);
}; */

const delateData = async (req, res) => {
  //eliminar
  let dataId = req.params.id;
  //obtener el id del objeto
  //permite encontrar el id buscado y lo elimina del registro
  
  await foto.findByIdAndDelete(dataId, (err, dataEliminada) => {
    const publica = dataEliminada.public_id;
         cloudinary.v2.uploader.destroy(publica)
        //base de datos, encuentra el id del producto, posee parametros de identificacion del id, error y el producto eliminado
    if (err) {
      res.status(500).send({
        message: "Server error ",
      });
    } else {
      if (!dataEliminada) {
        res.status(200).send({
          message: "No fue posible eliminar",
          statusCode: 400,
        });
      } else {
        res.status(200).send({
          status: "Producto eliminado",
          producto: dataEliminada,
          statusCode: 200,
        });
      }
    }
  });
  //cloudinary.v2.uploader.destroy();
  console.log(datas);
};

module.exports = {
  createData,
  showData,
  upgradeData,
  delateData,
};
