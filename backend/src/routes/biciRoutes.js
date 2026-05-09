const express = require('express');
const router = express.Router();
const biciController = require('../controllers/biciController');

// Definimos la ruta /info
router.get('/info', biciController.getDatosGeneral);

module.exports = router;
