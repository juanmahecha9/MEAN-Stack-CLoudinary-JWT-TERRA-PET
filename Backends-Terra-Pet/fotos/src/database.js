const mongoose = require("mongoose");
const dbconfig = require("../config/config.data.json");
url = dbconfig.database.url;
const web = dbconfig.database.web;
const dbWeb =`mongodb+srv://${web}@cluster0-qsspt.mongodb.net/<dbname>?retryWrites=true&w=majority`;

mongoose
  .connect(dbWeb, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));
