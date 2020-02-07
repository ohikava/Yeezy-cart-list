import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Thumb from '../../Thumb/Thumb';
import {increaseP_Q, decreaseP_Q,removeProduct} from '../../../services/cart/actions.js';

const CartProduct = ({product}) => {
  const classes = ['shelf-item'];
  const [isMouseOver, changeMouseOver] = useState(false);
  const dispatch = useDispatch();
  const handleMouseOver = () => {
    changeMouseOver(true);
  };

  const handleMouseOut = () => {
    changeMouseOver(false);
  };

  const handleOnIncrease = () => {
    dispatch(increaseP_Q(product.id));
  }

  const handleOnDecrease = () => {
    dispatch(decreaseP_Q(product.id));
  }

  const handleRemove = () => {
    dispatch(removeProduct(product.id));
  }

  if(isMouseOver) {
    classes.push('shelf-item--mouseover');
  }
  return <div className={classes.join(' ')}>
    <div
      className="shelf-item__del"
      onMouseOver={() => handleMouseOver()}
      onMouseOut={() => handleMouseOut()}
      onClick={() => handleRemove()}
      />
      <Thumb classes="shelf-item__thumb"
      src={require(`../../../static/products/${product.sku}.jpg`)}
      alt={product.title}
      />
      <div className="shelf-item__details">
        <p className="title">{product.title}</p>
        <p className="desc">
          {`${product.availableSizes.split(';')[0]} | ${product.style}`} <br />
        </p>
      </div>
      <div className="shelf-item__price">
        <p>{`${product.price}$`}</p>
        <div>
          <button onClick={handleOnDecrease} disabled={product.quantity === 1 ? true : false} className="change-product-button">-</button>
          <button onClick={handleOnIncrease} className="change-product-button">+</button>
        </div>
      </div>
  </div>
};

CartProduct.propTypes = {
  product: PropTypes.object.isRequired
}

export default CartProduct;
