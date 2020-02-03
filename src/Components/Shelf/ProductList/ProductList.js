import React from 'react';

import Product from './Product/Product.js';
const ProductList = ({products}) => {
  return products.map(p => {
    return <Product product={p} key={p.id} />
  });
};

export default ProductList;
