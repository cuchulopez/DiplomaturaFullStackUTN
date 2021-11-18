let pool = require('./db');

async function getServicios(){
    let query = "select * from servicios order by id desc";
    let rows = await pool.query(query);

    return rows;
}

module.exports = { getServicios }