var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let login = Boolean(req.session.usuario);

  res.render('index', { 
    title: 'Cabañas Ariel',
    login: login,
    usuario: req.session.usuario
  });
});

router.post('/login', function(req, res){
  if (req.body.usuario){
      req.session.usuario = req.body.usuario;
  }
  res.redirect('/');
});

module.exports = router;
