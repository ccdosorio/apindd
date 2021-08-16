const pool = require("../db/Connection");

// Obtener las pautas segun la orden
// @Lambda: nd_crm_get_pautas
async function getAll(idorden) {
  const connection = await pool.getConnection();
  try {
    const sql = `CALL pr_obtener_pautas(${connection.escape(idorden)})`;
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}
// @Lambda: nd_crm_detail_pauta
async function getDetail(idpauta) {
  const connection = await pool.getConnection();
  try {
    const sql = `CALL pr_detalle_pauta(${connection.escape(idpauta)})`;
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
