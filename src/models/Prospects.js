const pool = require("../db/Connection");
// @Lambda: nd_crm_get_prospects
async function getAll(idusuario) {
  const connection = await pool.getConnection();
  try {
    const sql = await `CALL pr_obtener_prospectos_territorio(${connection.escape(
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
// @Lambda: nd_crm_get_prospects_admin
async function getAllManager(no_pagina, paginas) {
  const connection = await pool.getConnection();
  try {
    const sql = await `CALL pr_obtener_prospectos(${connection.escape(
      no_pagina
    )},${connection.escape(paginas)})`;
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}
// @Lambda: nd_crm_filter_data_prospects
async function getDataFilters() {
  const connection = await pool.getConnection();
  try {
    const sql = await "CALL pr_filter_prospecto()";
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}
// @Lambda: nd_crm_quantity_prospects_executive
async function getQuantityOfRecords() {
  const connection = await pool.getConnection();
  try {
    const sql = await "CALL pr_cantidad_registros()";
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}
// @Lambda: nd_crm_get_by_prospect
async function getById(idcliente) {
  const connection = await pool.getConnection();
  try {
    const sql = await `CALL pr_obtener_prospecto(${connection.escape(
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
// @Lambda: nd_crm_update_customer
async function updateProspect(prospectData) {
  const connection = await pool.getConnection();
  try {
    const sql = await "CALL pr_editar_prospecto(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const data = await connection.query(sql, [
      prospectData.idcliente,
      prospectData.nit,
      prospectData.nombre,
      prospectData.direccion,
      prospectData.correo,
      prospectData.telefono,
      prospectData.estatus,
      prospectData.idgeo_departamento,
      prospectData.idgeo_municipio,
      prospectData.zona,
      prospectData.nombre_comercial,
      prospectData.referencia_ubicacion,
      prospectData.celular,
      prospectData.idforma_pago,
      prospectData.idcliente_tipo,
      prospectData.direccion_facturacion,
      prospectData.direccion_pago,
      prospectData.nombre_factura,
      prospectData.nit_factura,
      prospectData.fecha_factura,
      prospectData.fecha_pago,
      prospectData.exento_iva,
      prospectData.exento_timbre,
      prospectData.agente_retenedor,
      prospectData.cuenta_banco,
      prospectData.idbanco,
      prospectData.idtipo_cuenta,
      prospectData.tipo_ingreso,
    ]);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}
// @Lambda: nd_crm_get_departments
async function getAllDepartments() {
  const connection = await pool.getConnection();
  try {
    const data = await connection.query("CALL pr_obtener_departamentos()");
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}
// @Lambda: nd_crm_get_municipalities
async function getAllMunicipalities() {
  const connection = await pool.getConnection();
  try {
    const data = await connection.query("CALL pr_obtener_municipios()");
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

module.exports = {
  getAll,
  updateProspect,
  getById,
  getDataFilters,
  getAllDepartments,
  getAllMunicipalities,
  getAllManager,
  getQuantityOfRecords,
};
