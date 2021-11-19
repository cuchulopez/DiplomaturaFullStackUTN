var express = require('express');
var router = express.Router();
let serviciosModel = require('../models/serviciosModel');


router.get('/', async function(req, res, next) {
  let servicios = await serviciosModel.getServicios();

  res.render('servicios',{
    login: Boolean(req.session.user),
    usuario: req.session.user,
    // layout: 'layout',
    servicios
  });
});
module.exports = router;
