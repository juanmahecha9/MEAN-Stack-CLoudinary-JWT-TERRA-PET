const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const cors = require('cors');
const rutas = require('./routes/routes')
const config = require('../config/config.json')
const app = express();
require('./database')

app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'views')));
app.use(morgan());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//configuracion de subir imagenes
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/uploads"),
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});
app.use(multer({ storage }).single("imagen"));
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  /* Voy a tener acceso, control, seguimiento y origen de todos los datos que van a ingresar a la API */

  res.header("Access-Control-Allow-Headers", config.access.cookies);
  /* Acceso a todos los metadatos- cookies */

  res.header("Access-Control-Allow-Methods", config.access.method);
  /* Acceso a todos los metodos http- metodos de peticio */

  res.header("Allow", config.access.method);
  /* Confirmacion estricta de los metodos a utilizar */

  next();
});

app.use(rutas)


module.exports = app;
