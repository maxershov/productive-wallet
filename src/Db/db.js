require('dotenv').config({ path: '../../.env' })
const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
})

console.log(process.env.DB_USER);

pool.query('SELECT * FROM public."TASKS"', (error, results) => {
    if (error) {
        throw error
    }
    console.log(results.rows);
})