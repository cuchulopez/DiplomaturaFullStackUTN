var express = require('express');
var router = express.Router();
let serviciosModel = require('../models/serviciosModel');
let imagenesModel = require('../models/imagenesModel');

router.get('/servicios', async function(req, res, next) {
    let servicios = await serviciosModel.getServicios();

    res.json(servicios);

});

router.get('/imagenes', async function(req, res, next) {
    let imagenes = await imagenesModel.getImagenes();

    res.json(imagenes);

});

module.exports = router;
