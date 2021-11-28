let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
  // console.log('Bandera1: ' + req.session.user );
  res.render('admin/admin',{
    title: 'Administración de Cabañas Ariel',
    login: Boolean(req.session.user),
    usuario: req.session.user
  });
});
module.exports = router;
