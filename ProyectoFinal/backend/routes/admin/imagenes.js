let express = require('express');
let router = express.Router();
let imagenesModel = require('../../models/imagenesModel');

let util = require('util');
let cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);



router.get('/', async function(req, res, next){
    let imagenes = await imagenesModel.getImagenes();

    res.render('admin/imagenes',{
                title: 'Administración de Cabañas Ariel',
                login: Boolean(req.session.user),
                usuario: req.session.user,
                layout: 'admin/layout',
                imagenes
    });
});

router.get('/agregar',(req, res, next) => {
    res.render('admin/agregarImg',{
        title: 'Administración de Cabañas Ariel',
        layout:'admin/layout',
        login: Boolean(req.session.user),
        usuario: req.session.user
    });
});

router.get('/eliminar/:id', async(req, res, next) => {
    let id = req.params.id;

    let imagen = await imagenesModel.getImagenById(id);
    console.log(imagen.imagen_id);
    await (destroy(imagen.imagen_id));
    await imagenesModel.deleteImagenById(id);
    res.redirect('/admin/imagenes');
});

router.get('/modificar/:id', async(req, res, next) => {
    let id = req.params.id;
    let imagen = await imagenesModel.getImagenById(id);
    
    const img_cloud = cloudinary.image(imagen.imagen_id, {
            width: 100,
            height: 100,
            crop: 'fill'
    });
        
    res.render('admin/modificarImg',{
        title: 'Administración de Cabañas Ariel',
        layout:'admin/layout',
        login: Boolean(req.session.user),
        usuario: req.session.user,
        imagen,
        img_cloud
    });
});

router.post('/agregar', async (req, res, next) => {
    try {

        if (req.files.imagen_id != '' && req.body.descripcion != ''){
            imagen = req.files.imagen_id;
            imagen_id = (await uploader(imagen.tempFilePath, {
                tags: req.body.descripcion
            })).public_id;

            await imagenesModel.insertImagen({
                ...req.body,
                imagen_id
            });
            res.redirect('/admin/imagenes');

        } else {
            res.render('admin/agregarImg', {
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
        
        if( req.files ){
            img = req.files.imagen_nueva;
            imagen_id = (await uploader(img.tempFilePath, {
                tags: req.body.descripcion
            })).public_id;
            await (destroy(req.body.img_original));
        }
        
        let obj = {
            descripcion: req.body.descripcion,
            imagen_id
        }

        await imagenesModel.modifImagenById(obj,req.body.id);
        res.redirect('/admin/imagenes');
    } catch (e){
        console.log(e);
        res.render('admin/modificarImg',{
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