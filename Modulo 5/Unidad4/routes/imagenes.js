var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('imagenes',{
    login: Boolean(req.session.user),
    usuario: req.session.user
  });
});
module.exports = router;
