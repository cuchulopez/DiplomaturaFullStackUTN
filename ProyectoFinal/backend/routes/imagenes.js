var express = require('express');
var router = express.Router();
let imagenesModel = require('../models/imagenesModel');

router.get('/', async function(req, res, next) {
  let imagenes = await imagenesModel.getImagenes();

  res.render('imagenes',{
    login: Boolean(req.session.user),
    usuario: req.session.user,
    imagenes
  });
});
module.exports = router;
