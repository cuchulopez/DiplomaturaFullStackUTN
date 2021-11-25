let pool = require('./db');

async function getImagenes(){
    let query = "select * from imagenes order by id asc";
    let rows = await pool.query(query);
    
    return rows;
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

async function deleteImagenById(id) {
    let query = 'delete from imagenes where id = ?';
    let rows = await pool.query(query, [id]);

    return rows;
}

module.exports = { getImagenes, insertImagen, deleteImagenById }