let pool = require('./db');

async function getServicios(){
    let query = "select * from servicios order by id asc";
    let rows = await pool.query(query);
    
    return rows;
}

async function insertServicios(obj) {
    try {
        let query = "insert into servicios set ?";
        let rows = await pool.query(query, [obj]);
        
        return rows;
    } catch (e){
        console.log(e);
        throw e;
    }
}

async function getServicioById(id) {
    let query = 'select * from servicios where id = ?';
    let rows = await pool.query(query, [id]);

    return rows[0];
}

async function modifServicioById (obj,id){
    try {
        let query = 'update servicios set ? where id = ?';
        let rows = await pool.query(query,[obj, id]);

        return rows;
    } catch(e){
        throw e;
    }
}

async function deleteServicioById(id) {
    let query = 'delete from servicios where id = ?';
    let rows = await pool.query(query, [id]);

    return rows;
}

module.exports = { getServicios, insertServicios, getServicioById, modifServicioById, deleteServicioById }