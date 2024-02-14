const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'manage_x_db',
  password: 'your_password',
  port: 5432,
});

const query = (text, params) => pool.query(text, params);

module.exports = {
  query,
};