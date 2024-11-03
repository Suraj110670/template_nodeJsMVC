// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'yourusername',
  host: 'localhost',
  database: 'recipedb',
  password: 'yourpassword',
  port: 5432,
});

// Confirm connection to database
pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    pool.end();
  });
  
module.exports = pool;