const express = require('express');
const router = express.Router();
const controllers = require('../controllers/users')

router.post("/crearuser", controllers.crear);
router.get("/users", controllers.leer);

module.exports = router;