let pool = require('./db');
let md5 = require('md5');

async function getUserByUserAndPass(username, password) {
    try {
        let query = 'select * from usuarios where user = ? and password = ? limit 1';
        let rows = await pool.query(query, [username, md5(password)]);
        // console.log(rows);
        return rows[0];
    } catch (e){
        throw e;
    }
};

module.exports = { getUserByUserAndPass };