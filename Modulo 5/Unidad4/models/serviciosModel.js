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

module.exports = { getServicios, insertServicios }