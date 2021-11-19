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

router.get('/agregar',(req, res, next) => {
    res.render('admin/agregar',{
        layout:'admin/layout',
        login: Boolean(req.session.user),
        usuario: req.session.user
    });
});

router.get('/eliminar/:id', async(req, res, next) => {
    let id = req.params.id;
    await serviciosModel.deleteServicioById(id);
    res.redirect('/admin/servicios');
});

router.get('/modificar/:id', async(req, res, next) => {
    let id = req.params.id;
    let servicio = await serviciosModel.getServicioById(id);
    
    res.render('admin/modificar',{
        layout:'admin/layout',
        login: Boolean(req.session.user),
        usuario: req.session.user,
        servicio
    });
});

router.post('/agregar', async (req, res, next) => {
    try {
        // console.log('BANDERA1');
        if (req.body.titulo != '' && req.body.descripcion != ''){
            await serviciosModel.insertServicios(req.body);
            res.redirect('/admin/servicios');
            // res.render('admin/servicios', {
            //     layout:'admin/layout',
            //     login: Boolean(req.session.user),
            //     usuario: req.session.user,
            // });

        } else {
            res.render('admin/agregar', {
                layout:'admin/layout',
                login: Boolean(req.session.user),
                usuario: req.session.user,
                error: true,
                message: 'Todos los campos son requeridos.'
            });
        }
    }catch (e){
        console.log(e);
        res.render('admin/agregar', {
            layout:'admin/layout',
            login: Boolean(req.session.user),
            usuario: req.session.user,
            error: true,
            message: 'No se pudo agregar.'
        });
    }
});

router.post('/modificar', async (req, res, next) => {
    try {
        let obj = {
            titulo: req.body.titulo,
            descripcion: req.body.descripcion
        }
        await serviciosModel.modifServicioById(obj,req.body.id);
        res.redirect('/admin/servicios');
    } catch (e){
        console.log(e);
        res.render('admin/modificar',{
            layout:'admin/layout',
            login: Boolean(req.session.user),
            usuario: req.session.user,
            error: true,
            message: 'No se pudo modificar.'            
        });
    }
});

module.exports = router;