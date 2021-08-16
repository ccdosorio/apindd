const pool = require("../db/Connection");

// Obtener las categorías-marcas en base al cliente
// @Lambda: nd_crm_get_category_brand
async function getAll(idcliente, no_pagina, paginas) {
  const connection = await pool.getConnection();
  try {
    const sql = await `CALL pr_obtener_cliente_marca(${connection.escape(
      idcliente
    )},${connection.escape(no_pagina)},${connection.escape(paginas)})`;
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}
// Cantidad de categorias de un cliente (Tabla: categoria-marca)
// @Lambda: nd_crm_quantity_categories
async function getQuantity(idcliente) {
  const connection = await pool.getConnection();
  try {
    const sql = await `CALL pr_cantidad_categorias(${connection.escape(
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

// Crear una categoría (Tabla: cliente-marca)
// @Lambda: nd_crm_create_category
async function create(categoryData) {
  const connection = await pool.getConnection();
  try {
    const sql = "CALL pr_crear_categoria(?,?,?)";
    const data = await connection.query(sql, [
      categoryData.idcliente,
      categoryData.idcategoria,
      categoryData.nombre,
    ]);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

// Editar un cliente-marca
// @Lambda: nd_crm_update_category
async function update(categoryData) {
  const connection = await pool.getConnection();
  try {
    const sql = await "CALL pr_editar_categoria(?,?,?,?)";
    const data = await connection.query(sql, [
      categoryData.idcliente_marca,
      categoryData.idcliente,
      categoryData.idcategoria,
      categoryData.nombre,
    ]);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

// Inactivar un cliente-marca
// @Lambda: nd_crm_delete_category
async function inactivate(idcategory) {
  const connection = await pool.getConnection();
  try {
    const sql = "CALL pr_inactivar_categoria(?)";
    const data = await connection.query(sql, idcategory);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

// Filtro de categorias
// @Lambda: nd_crm_get_data_categories
async function getCategories() {
  const connection = await pool.getConnection();
  try {
    const data = await connection.query("CALL pr_obtener_categorias()");
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
  getCategories,
  create,
  update,
  inactivate,
};
