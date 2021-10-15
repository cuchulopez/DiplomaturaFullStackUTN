var express = require('express');
var usuarios = require('../data/usuarios.json');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login');
});

module.exports = router;
