var express = require('express');
let alumnos = require('../public/alumnos.json');

var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  // console.log(alumnos);
  res.render('archivo', { alumnos });
  // res.json(archivo);
});
module.exports = router;
