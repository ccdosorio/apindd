const pool = require("../db/Connection");

async function getAllActividad(idusuario) {
  const connection = await pool.getConnection();
  try {
    const sql = `CALL pr_obtener_actividad(${connection.escape(idusuario)})`;
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}


async function addActividad(actividad_data) {
  const connection = await pool.getConnection();
  try {
    const sql = await "CALL pr_crear_actividad(?,?,?,?)";
    let color_css='#0146bb';
    const data = await connection.query(sql, [
      actividad_data.titulo,
      actividad_data.idusuario,
      actividad_data.fecha_creacion_actividad,
      color_css,
      

    ]);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}


// OBTENER TIPO DE ACTIVIDAD POR ID
async function getById(idactividad) {
  const connection = await pool.getConnection();
  try {
    const sql = `CALL pr_get_obtener_actividad(${connection.escape(idactividad)})`;
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

// ACTUALIZAR LOS DATOS DE LA ACTIVIDAD
async function updateActividad(actividad_data) {
  const connection = await pool.getConnection();
  try {
    const sql = await "CALL pr_editar_actividad(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const data = await connection.query(sql, [
      actividad_data.idactividad,
      actividad_data.titulo,
      actividad_data.idusuario,
      actividad_data.fecha_creacion_actividad,
      actividad_data.contacto,
      actividad_data.propuesta,
      actividad_data.monto_cotizado,
      actividad_data.monto_venta,
      actividad_data.observacion,
      actividad_data.color_css,
      actividad_data.idactividad_tipo,
      actividad_data.idactividad_resultado,
      actividad_data.idejecutivo,
      actividad_data.idcliente,
      actividad_data.hora_inicio,
      actividad_data.hora_fin,
      actividad_data.gasto_reunion,
      actividad_data.hora_inicio_dt,
      actividad_data.hora_fin_dt,

    ]);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

// ELIMINAR UNA ACTIVIAD
async function deleteActividad(idactividad) {
  const connection = await pool.getConnection();
  try {
    const sql = `CALL pr_inactivar_cita (${connection.escape(idactividad)})`;
    const data = await connection.query(sql);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

module.exports = {
  getAllActividad,
  addActividad,
  updateActividad,
  getById,
  deleteActividad
};