const pool = require("../db/Connection");

// @Lambda: nd_crm_contactos
async function getContactsById(idcliente, no_pagina, paginas) {
  const connection = await pool.getConnection();
  try {
    const sql = `CALL pr_obtener_contactos(${connection.escape(
      idcliente
    )}, ${connection.escape(no_pagina)}, ${connection.escape(paginas)})`;
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

// Cantidad de contactos de un ejecutivo
// @lambda: nd_crm_quantity_contacts
async function getQuantity(idpersona) {
  const connection = await pool.getConnection();
  try {
    const sql = await `CALL pr_cantidad_contactos(${connection.escape(
      idpersona
    )})`;
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}
// @Lambda: nd_crm_get_by_contact
async function getById(idcontacto) {
  const connection = await pool.getConnection();
  try {
    const sql = `CALL pr_get_contacto(${connection.escape(idcontacto)})`;
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

// @Lambda: nd_crm_add_contact
async function createContact(contactData) {
  const connection = await pool.getConnection();
  try {
    const sql = "CALL pr_crear_contacto(?,?,?,?,?)";
    const data = await connection.query(sql, [
      contactData.idpersona,
      contactData.nombre,
      contactData.correo,
      contactData.telefono,
      contactData.idcontacto_tipo,
    ]);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

// @Lambda: nd_crm_update_contact
async function updateContact(contactData) {
  const connection = await pool.getConnection();
  try {
    const sql = await "CALL pr_editar_contacto(?,?,?,?,?)";
    const data = await connection.query(sql, [
      contactData.idcontacto,
      contactData.nombre,
      contactData.correo,
      contactData.telefono,
      contactData.idcontacto_tipo,
    ]);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

// @Lambda: nd_crm_delete_contact
async function deleteContact(idcontacto) {
  const connection = await pool.getConnection();
  try {
    const sql = "CALL pr_inactivar_contacto(?)";
    const data = await connection.query(sql, idcontacto);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

// Contactos administrador

// @Lambda: nd_crm_get_contacts
async function getAll(no_pagina, paginas) {
  const connection = await pool.getConnection();
  try {
    const sql = `CALL pr_obtener_contactos_admin( ${connection.escape(
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

// @Lambda: nd_crm_quantity_contacts_admin
async function getQuantityContacts() {
  const connection = await pool.getConnection();
  try {
    const sql = await "CALL pr_cant_contactos()";
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

// Filtro contactos
// @Lambda: nd_crm_contact_filter
async function getFilter() {
  const connection = await pool.getConnection();
  try {
    const sql = "CALL pr_filter_contacto()";
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

module.exports = {
  getContactsById,
  getQuantity,
  getById,
  createContact,
  updateContact,
  deleteContact,
  getAll,
  getQuantityContacts,
  getFilter,
};
