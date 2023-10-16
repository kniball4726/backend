const express = require('express');
const router = express.Router();
const controllers = require('../controllers/productos')

router.post("/add",controllers.agregarProducto);
router.get("/products", controllers.mostrarProductos);
router.get("/find/:codigo?", controllers.buscarProducto);
router.put("/update/:codigo?", controllers.actualizarProducto);
router.delete("/delete/:codigo?", controllers.borrarProducto);

module.exports = router;