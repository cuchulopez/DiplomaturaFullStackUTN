let express = require('express');
let router = express.Router();
let serviciosModel = require('../../models/serviciosModel');

router.get('/', async function(req, res, next){
    let servicios = await serviciosModel.getServicios();

    res.render('admin/servicios',{
                title: 'Administración de Cabañas Ariel',
                login: Boolean(req.session.user),
                usuario: req.session.user,
                layout: 'admin/layout',
                servicios
    });
});

router.get('/agregar',(req, res, next) => {
    res.render('admin/agregarServ',{
        title: 'Administración de Cabañas Ariel',
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
    
    res.render('admin/modificarServ',{
        title: 'Administración de Cabañas Ariel',
        layout:'admin/layout',
        login: Boolean(req.session.user),
        usuario: req.session.user,
        servicio
    });
});

router.post('/agregar', async (req, res, next) => {
    try {
        if(req.body.icono == ''){
            req.body.icono = 'fas fa-question';
        }
        if (req.body.titulo != '' && req.body.descripcion != ''){
                        
            await serviciosModel.insertServicios(req.body);
            res.redirect('/admin/servicios');

        } else {
            res.render('admin/agregarServ', {
                title: 'Administración de Cabañas Ariel',
                layout:'admin/layout',
                login: Boolean(req.session.user),
                usuario: req.session.user,
                error: true,
                message: 'Todos los campos son requeridos.'
            });
        }
    }catch (e){
        console.log(e);
        res.render('admin/agregarServ', {
            title: 'Administración de Cabañas Ariel',
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
            descripcion: req.body.descripcion,
            icono: req.body.icono
        }
        await serviciosModel.modifServicioById(obj,req.body.id);
        res.redirect('/admin/servicios');
    } catch (e){
        console.log(e);
        res.render('admin/modificarServ',{
            title: 'Administración de Cabañas Ariel',
            layout:'admin/layout',
            login: Boolean(req.session.user),
            usuario: req.session.user,
            error: true,
            message: 'No se pudo modificar.'            
        });
    }
});

module.exports = router;