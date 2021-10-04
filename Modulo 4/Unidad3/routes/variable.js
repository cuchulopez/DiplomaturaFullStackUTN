var express = require('express');
var router = express.Router();

let alumnos = [ 
    {
      id: 1,
      nombre: 'Juan Gomez',
      nota: 7
    }, 
    {
      id: 2,
      nombre: 'Pedro Rodriguez',
      nota: 4
    }, 
    {
      id: 3,
      nombre: 'Roxana García',
      nota: 8
    }, 
    {
      id: 4,
      nombre: 'Luciano Lopez',
      nota: 5
    }, 
    {
      id: 5,
      nombre: 'Fernanda Gimenez',
      nota: 6
    }, 
    {
      id: 6,
      nombre: 'Florencia Martinez',
      nota: 10
    }, 
    {
      id: 7,
      nombre: 'Raul Sanchez',
      nota: 7
    }, 
    {
      id: 8,
      nombre: 'Sandra Figueroa',
      nota: 8
    }
  ];

router.get('/', function(req, res, next) {
  // res.render('variable', { title: 'Notas de alumnos desde variable' });
  res.render('variable', {
    alumnos
   });
});

module.exports = router;
