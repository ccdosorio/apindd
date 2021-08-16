const pool = require("../db/Connection");

// Obtener agencias segun el usuario
// @Lambda: nd_crm_agencies
async function getAll(idusuario, no_pagina, paginas) {
  const connection = await pool.getConnection();
  try {
    const sql = await `CALL pr_obtener_agencias(${connection.escape(
      idusuario
    )}, ${connection.escape(no_pagina)}, ${connection.escape(paginas)})`;
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

// Cantidad de agencias del usuario
// @Lambda: nd_crm_quantity_agencies
async function getQuantity(idusuario) {
  const connection = await pool.getConnection();
  try {
    const sql = await `CALL pr_cantidad_agencias(${connection.escape(
      idusuario
    )})`;
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

// Obtener detalle de una agencia
// @Lambda: nd_crm_detail_agency
async function getDetailAgency(idcliente) {
  const connection = await pool.getConnection();
  try {
    const sql = await `CALL pr_detalle_agencia(${connection.escape(
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

// <--- Administrador -->

// Obtener todas las agencias
// @Lambda: nd_crm_get_agencies_admin
async function getAllAdmin(no_pagina, paginas) {
  const connection = await pool.getConnection();
  try {
    const sql = await `CALL pr_obtener_agencias_admin(${connection.escape(
      no_pagina
    )}, ${connection.escape(paginas)})`;
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

// Cantidad de todas las agencias existentes en la BD
// @Lambda: nd_crm_quantity_agencies_admin
async function getQuantityAdmin() {
  const connection = await pool.getConnection();
  try {
    const sql = await `CALL pr_cantidad_agencias_admin()`;
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
  getQuantity,
  getDetailAgency,
  getAllAdmin,
  getQuantityAdmin,
};
