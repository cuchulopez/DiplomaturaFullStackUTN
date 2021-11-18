let express = require('express');

let router = express.Router();

router.get('/', function(req, res, next) {
  res.render('precios',{
    login: Boolean(req.session.user),
    usuario: req.session.user
  });
});
module.exports = router;
