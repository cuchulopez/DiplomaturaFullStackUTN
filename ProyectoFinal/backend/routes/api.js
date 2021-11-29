var express = require('express');
var router = express.Router();
let nodemailer = require('nodemailer');

let serviciosModel = require('../models/serviciosModel');
let imagenesModel = require('../models/imagenesModel');

router.get('/servicios', async function(req, res, next) {
    let servicios = await serviciosModel.getServicios();

    res.json(servicios);

});

router.get('/imagenes', async function(req, res, next) {
    let imagenes = await imagenesModel.getImagenes();

    res.json(imagenes);

});

router.post('/contacto', async (req,res) => {
    const mail = {
        to: 'jvrelopez@gmail.com',
        subject: 'Contacto desde sitio Cabañas',
        html: `Nombre: ${req.body.name} <br>
               Correo: ${req.body.email}<br>
               Asunto: ${req.body.subject} <br>
               Comentario: ${req.body.message} <br><br>
               Saludos.`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail);

    res.status(201).json({
        error:false,
        message: 'El mensaje fue enviado.'
    });
});

module.exports = router;
