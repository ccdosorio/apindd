const mysql2 = require("mysql2/promise");

var pool = mysql2.createPool({
  connectionLimit: 15,
  host: "192.168.28.41",
  user: "root",
  password: "Librealvient0",
  database: "ventas",
});

async function getPool() {
  const connection = await pool.getConnection();
  try {
    const data = await connection.query("SELECT 1 + 1 AS solution");
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  try {
    const results = await getPool();
    console.log("The solution is: " + results[0][0].solution);
  } catch (error) {
    console.log(error);
  }
}

main();

module.exports = pool;