const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/products.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

const sql = `CREATE TABLE products(
  id INTEGER PRIMARY KEY,
  sku INTEGER,
  title TEXT,
  price INTEGER,
  isFreeShipping BOLEAN,
  availableSizes TEXT,
  style TEXT
)`;

db.run(sql);

module.exports = db;
