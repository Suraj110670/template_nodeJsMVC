// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'yourusername',
  host: 'localhost',
  database: 'recipedb',
  password: 'yourpassword',
  port: 5432,
});

module.exports = pool;