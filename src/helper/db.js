import mysql from "mysql2/promise";
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "calcya",
});
pool.getConnection((err) => {
  if (err) {
    console.log("Error connecting in db");
  } else console.log("connected to db");
});

export default pool;
