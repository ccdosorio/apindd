const pool = require("../db/Connection");

// OBTENER TODOS LOS EJECUTIVOS CONFORME ESTE LOGUEADO
async function getAllId(idusuario) {
  const connection = await pool.getConnection();
  try {
    const sql = `CALL pr_obtener_ejecutivos_calendar(${connection.escape(idusuario)})`;
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}


async function getAll() {
  const connection = await pool.getConnection();
  try {
    const data = await connection.query("CALL pr_obtener_ejecutivos()");
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

// OBTENER EJECUTIVO POR ID
async function getById(idejecutivo) {
  const connection = await pool.getConnection();
  try {
    const sql = `CALL pr_get_ejecutivo(${connection.escape(idejecutivo)})`;
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
  getAllId,
  getById
};