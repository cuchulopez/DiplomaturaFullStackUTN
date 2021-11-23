async function getImagenes(){
    let query = "select * from imagenes order by id asc";
    let rows = await pool.query(query);
    
    return rows;
}