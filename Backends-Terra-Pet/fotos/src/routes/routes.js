const express = require("express");
const control = require("../controller/routes.controller");
const router = express.Router();

router.get("/prueba", (req, res) => {
  res.send("Hola Juan...");
});

router.get('/', async (req, res) =>{
  res.render('index.html');
})

router.post("/add", control.createData);

router.get("/mostrar", control.showData);

router.put("/modificar/:id", control.upgradeData);

router.delete("/borrar/:id", control.delateData);

module.exports = router;
