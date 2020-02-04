const path = require('path');
const express = require('express');
const cors = require('cors');
const productsRoute = require('./routes/products.js');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/products', productsRoute);

const port = 8001;

app.listen(port, () => {
  console.log(`[products] API listening on port ${port}.`);
});
