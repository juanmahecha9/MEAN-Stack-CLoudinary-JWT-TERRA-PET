const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Esquema para la coleccion
//Esquema para la coleccion
const bcrypt = require("bcrypt");

const user = Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    ocupation: {
      type: String,
      require: true,
    }, 
    income: {
      type: String,
      require: true,
    }, 
    pet: {
      type: String,
      require: true,
    }, 
    adress: {
      type: String,
      require: true,
    }, 
    phone: {
      type: String,
      require: true,
    }, 
    type1: {
      type: String,
      require: String
    }
  },
  {
    timestamps: true,
  }
);



module.exports = mongoose.model("dataUserAdoptante", user);
