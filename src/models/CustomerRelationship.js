const pool = require("../db/Connection");

// Obtener los clientes relacionados
// @Lambda: nd_crm_get_customer_relationship
async function getAll(idcliente) {
  const connection = await pool.getConnection();
  try {
    const sql = await `CALL pr_obtener_clientes_r(${connection.escape(
      idcliente
    )})`;
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
};
