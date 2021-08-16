const pool = require("../db/Connection");

async function searchNombreComercial(nombre_comercial) {
    const connection = await pool.getConnection();
    try {
        const sql = await `CALL pr_filtro_nombre(${connection.escape(
            nombre_comercial
        )})`;
        const data = await connection.query(sql);
        return data[0][0];
    } catch (error) {
        console.log(error);
    } finally {
        connection.release();
    }
}

module.exports = { searchNombreComercial };
