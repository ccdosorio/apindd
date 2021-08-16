const pool = require("../db/Connection");

async function getAll() {
  const connection = await pool.getConnection();
  try {
    const data = await connection.query("CALL pr_obtener_resultado_actividad()");
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

// OBTENER EL RESULTADO DE LA ACTIVIDAD POR ID
async function getById(idactividad_resultado) {
  const connection = await pool.getConnection();
  try {
    const sql = `CALL pr_get_resultado_actividad(${connection.escape(idactividad_resultado)})`;
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}


module.exports = {
  getAll,
  getById
};