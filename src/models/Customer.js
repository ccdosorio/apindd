const pool = require("../db/Connection");

// @Lambda: nd_crm_get_clientes
async function getAll(idusuario, no_pagina, paginas) {
  const connection = await pool.getConnection();
  try {
    const sql = await `CALL pr_obtener_clientes_territorio(${connection.escape(
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
// @Lambda: nd_crm_get_clients_admin
async function getAllManager(no_pagina, paginas) {
  const connection = await pool.getConnection();
  try {
    const data = await connection.query(
      `CALL pr_obtener_clientes_admin(${connection.escape(
        no_pagina
      )}, ${connection.escape(paginas)})`
    );
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}
// @Lambda: nd_crm_filter_data_customers
async function getDataFilters() {
  const connection = await pool.getConnection();
  try {
    const sql = await "CALL pr_filter_cliente()";
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}
// @Lambda: nd_crm_quantity_clients_executive
async function getQuantity(idusuario) {
  const connection = await pool.getConnection();
  try {
    const sql = await `CALL pr_clientes_ejecutivo_cant(${connection.escape(
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
// @Lambda: nd_crm_quantity_clients_admin
async function getQuantityOfRecords() {
  const connection = await pool.getConnection();
  try {
    const sql = await "CALL pr_cantidad_registros2()";
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

// @Lambda: nd_crm_get_by_client
async function getById(idcliente) {
  const connection = await pool.getConnection();
  try {
    const sql = await `CALL pr_obtener_cliente(${connection.escape(
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
// @Lambda: nd_crm_create_customer
async function createCustomer(customersData) {
  const connection = await pool.getConnection();
  try {
    const sql = await "CALL pr_crear_persona_cliente(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const data = await connection.query(sql, [
      customersData.genero,
      customersData.nombre,
      customersData.apellido,
      customersData.direccion,
      customersData.telefonos,
      customersData.tipo_persona,
      customersData.nit,
      customersData.correo,
      customersData.fecha_nacimiento,
      customersData.idgeo_departamento,
      customersData.idgeo_municipio,
      customersData.zona,
      customersData.idejecutivo,
      customersData.nombre_comercial,
      customersData.referencia_ubicacion,
      customersData.celular,
      customersData.idforma_pago,
      customersData.idcliente_tipo,
      customersData.direccion_facturacion,
      customersData.direccion_pago,
      customersData.nombre_factura,
      customersData.nit_factura,
      customersData.fecha_factura,
      customersData.fecha_pago,
      customersData.exento_iva,
      customersData.exento_timbre,
      customersData.agente_retenedor,
      customersData.cuenta_banco,
      customersData.idbanco,
      customersData.idtipo_cuenta,
      customersData.tipo_ingreso,
      customersData.telefono_contacto,
      customersData.correo_contacto,
      customersData.idcontacto_tipo,
      customersData.nombre_contacto,
    ]);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}
// @Lambda: nd_crm_update_customer
async function updateCustomer(customersData) {
  const connection = await pool.getConnection();
  try {
    const sql = await "CALL pr_editar_cliente(?,?,?,?,?,?)";
    const data = await connection.query(sql, [
      customersData.idcliente,
      customersData.nit,
      customersData.nombre,
      customersData.direccion,
      customersData.correo,
      customersData.telefono,
    ]);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}
// @Lambda: nd_crm_delete_customer
async function deleteCustomer(idcliente) {
  const connection = await pool.getConnection();
  try {
    const sql = await `CALL pr_inactivar_cliente(${connection.escape(
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
  getAllManager,
  getById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getQuantityOfRecords,
  getDataFilters,
  getQuantity,
};
