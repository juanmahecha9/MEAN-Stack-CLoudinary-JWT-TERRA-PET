const { model, Schema } = require("mongoose");

const foto = new Schema({
  
  title: String,
  description: String,
  url: String,
  public_id: String,
},
{
  timestamps: true,
});

module.exports = model("foto", foto);
