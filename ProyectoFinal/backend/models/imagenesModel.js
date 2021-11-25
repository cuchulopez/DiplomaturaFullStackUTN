let pool = require('./db');

async function getImagenes(){
    let query = "select * from imagenes order by id asc";
    let rows = await pool.query(query);
    
    return rows;
}

async function getImagenById(id) {
    let query = 'select * from imagenes where id = ?';
    let rows = await pool.query(query, [id]);

    return rows[0];
}

async function insertImagen(obj) {
    try {
        let query = "insert into imagenes set ?";
        let rows = await pool.query(query, [obj]);
        
        return rows;
    } catch (e){
        console.log(e);
        throw e;
    }
}

async function modifImagenById (obj,id){
    try {
        let query = 'update imagenes set ? where id = ?';
        let rows = await pool.query(query,[obj, id]);

        return rows;
    } catch(e){
        throw e;
    }
}

async function deleteImagenById(id) {
    let query = 'delete from imagenes where id = ?';
    let rows = await pool.query(query, [id]);

    return rows;
}

module.exports = { getImagenes, getImagenById, insertImagen, modifImagenById, deleteImagenById }