var express = require('express');
let empleados = [];
require('dotenv').config();
let pool = require('../models/db');

pool.query('SELECT empleados.nombre, empleados.apellido, trabajo.trabajo AS puesto, salario, mail FROM empleados INNER JOIN trabajo ON empleados.trabajo = trabajo.id_trabajo;')
  .then(function(resultado){
    empleados = resultado;
  // console.log(empleados);
});

var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  // console.log(alumnos);
  res.render('listaEmpleados', { empleados });
  // res.json(archivo);
});
module.exports = router;
