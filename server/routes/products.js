const express = require('express');
const db = require('../models/index.js');
const router = express.Router();

router.get('/getP', async (req, res) => {
  const sql = `SELECT * FROM products;`;
  db.all(sql, [], (err,rows) => {
    if(err) return console.error(err);
    res.send(rows);
  })
});
router.post('/addP', async (req, res) => {
  const body = req.body;
  const sql = `INSERT INTO products(title, sku, availableSizes, style, price, isFreeShipping) VALUES($title, $sku, $availableSizes, $style, $price, $isFreeShipping);`;
  db.run(sql,{
    $title: body.title,
    $sku: body.sku,
    $availableSizes: body.availableSizes,
    $style: body.style,
    $price: body.price,
    $isFreeShipping: body.isFreeShipping
  }, (err, rows) => {
    if (err) return console.error(err);
    res.send('IT work');
  })
});
module.exports = router;
