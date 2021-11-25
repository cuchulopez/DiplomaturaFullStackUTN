let express = require('express');
let router = express.Router();
let loginModel = require('../models/loginModel');

router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', async (req, res,next) => {
  try {
    let usuario = req.body.usuario;
    let password = req.body.password;

    // console.log(req.body.usuario);

    let data = await loginModel.getUserByUserAndPass(usuario, password);
    // console.log("Data ", data.user);
    if (data != undefined){
      req.session.id_usr = data.id_usr;
      req.session.user = data.user;

      // console.log("Data ", data.user);
      // console.log("Req ", req.session.user);
      // console.log("Req ", Boolean(req.session.user));

      res.redirect('/admin/admin');
    } else {
      res.render('login',{
        error: true
      });
    }
  } catch (e){
    console.log(e);
  }

});
module.exports = router;
