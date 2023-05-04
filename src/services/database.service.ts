const { Pool } = require("pg");
require("dotenv").config();

const jwt = require("jsonwebtoken");

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  port: process.env.DATABASE_PORT,
});

function simpleExecute(statement: string, binds = [], _opts: any = {}) {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await pool.query(statement, binds);
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports.simpleExecute = simpleExecute;
