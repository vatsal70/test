const mysql = require('mysql2');
require('dotenv').config();

console.log('🔄 Attempting to connect to database...');
console.log(`📍 Host: ${process.env.DB_HOST}`);
console.log(`📚 Database: ${process.env.DB_NAME}`);
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
  } else {
    console.log('Database connected successfully!');
  }
  connection.end();
});
