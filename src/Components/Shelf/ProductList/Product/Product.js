import React from 'react';
import PropTypes from 'prop-types';
import Thumb from '../../../Thumb/Thumb.js';
import { addProduct } from '../../../../services/cart/actions';
import {useDispatch} from 'react-redux';

const Product = ({product}) => {
  const dispatch = useDispatch();

  return (
  <div className="shelf-item" onClick={() => dispatch(addProduct(product))}>
    {product.isFreeShipping && (
      <div className="shelf-stopper">Free shipping</div>
    )}
    <Thumb classes="shelf-item__thumb"
      src={require(`../../../../static/products/${product.sku}_1.jpg`)}
      alt={product.title} />
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">{product.price}$</div>
      <div className="shelf-item__buy-btn">Add to cart</div>
  </div>
)
}

Product.propTypes = {
  product: PropTypes.object.isRequired
};

export default Product;
