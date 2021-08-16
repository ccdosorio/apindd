const pool = require("../db/Connection");

// Obtener las ordenes por cliente rol:ejecutivo
// @Lambda: nd_crm_get_orders
async function getAll(idcliente, idusuario) {
  const connection = await pool.getConnection();
  try {
    const sql = `CALL pr_obtener_ordenes(${connection.escape(
      idcliente
    )},${connection.escape(idusuario)})`;
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}
// Detalle de la orden
// @Lambda: nd_crm_get_order_detail
async function getDetail(idorden) {
  const connection = await pool.getConnection();
  try {
    const sql = `CALL pr_obtener_detalle_orden(${connection.escape(idorden)})`;
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
  getDetail,
};
