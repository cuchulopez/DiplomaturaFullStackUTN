var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  let login = Boolean(req.session.usuario);
  res.render('servicios', {
    login: login
  });
});
module.exports = router;
