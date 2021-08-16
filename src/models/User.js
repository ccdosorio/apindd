const pool = require("../db/Connection");

async function login(userData) {
  const connection = await pool.getConnection();
  try {
    const sql = await "CALL pr_autenticar_usuario(?)";
    const data = await connection.query(sql, [userData.username]);
    return data[0][0];
  } catch (error) {
    console.log(error);
  } finally {
    connection.release();
  }
}

module.exports = { login };
