
const { Pool } = require("pg");

require("dotenv").config();

// Temporary diagnostic: logs connection settings, never the password.
console.log("DB diagnostic:", {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  passwordExists: Boolean(process.env.DB_PASSWORD),
});

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.on("error", (error) => {
  console.error("Unexpected database pool error:", error.message);
});

module.exports = pool;