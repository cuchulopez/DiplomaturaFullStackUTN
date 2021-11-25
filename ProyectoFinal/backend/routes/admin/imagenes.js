let express = require('express');
let router = express.Router();
let imagenesModel = require('../../models/imagenesModel');

let util = require('util');
let cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);

router.get('/', async function(req, res, next){
    let imagenes = await imagenesModel.getImagenes();

    res.render('admin/imagenes',{
                login: Boolean(req.session.user),
                usuario: req.session.user,
                layout: 'admin/layout',
                imagenes
    });
});

router.get('/agregar',(req, res, next) => {
    res.render('admin/agregarImg',{
        layout:'admin/layout',
        login: Boolean(req.session.user),
        usuario: req.session.user
    });
});

router.get('/eliminar/:id', async(req, res, next) => {
    let id = req.params.id;
    await imagenesModel.deleteImagenById(id);
    res.redirect('/admin/imagenes');
});

router.get('/modificar/:id', async(req, res, next) => {
    let id = req.params.id;
    let servicio = await serviciosModel.getServicioById(id);
    
    res.render('admin/modificarServ',{
        layout:'admin/layout',
        login: Boolean(req.session.user),
        usuario: req.session.user,
        servicio
    });
});

router.post('/agregar', async (req, res, next) => {
    try {
        let img_id = '';
        if (req.body.descripcion != ''){
            imagen = req.files.imagen_id;
            imagen_id = (await uploader(imagen.tempFilePath)).public_id;

            await imagenesModel.insertImagen({
                ...req.body,
                imagen_id
            });
            res.redirect('/admin/imagenes');

        } else {
            res.render('admin/agregarImg', {
                layout:'admin/layout',
                login: Boolean(req.session.user),
                usuario: req.session.user,
                error: true,
                message: 'Todos los campos son requeridos.'
            });
        }
    }catch (e){
        console.log(e);
        console.log('Bandera');
        res.render('admin/agregarImg', {
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
            layout:'admin/layout',
            login: Boolean(req.session.user),
            usuario: req.session.user,
            error: true,
            message: 'No se pudo modificar.'            
        });
    }
});

module.exports = router;