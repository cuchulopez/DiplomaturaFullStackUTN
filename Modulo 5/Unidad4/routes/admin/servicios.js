let express = require('express');
let router = express.Router();
let serviciosModel = require('../../models/serviciosModel');

router.get('/', async function(req, res, next){
    let servicios = await serviciosModel.getServicios();

    res.render('admin/servicios',{
                login: Boolean(req.session.user),
                usuario: req.session.user,
                layout: 'admin/layout',
                servicios
    });
});

module.exports = router;