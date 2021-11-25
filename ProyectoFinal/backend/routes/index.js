var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Cabañas Ariel',
    login: Boolean(req.session.user),
    usuario: req.session.user  
  });
});

module.exports = router;
