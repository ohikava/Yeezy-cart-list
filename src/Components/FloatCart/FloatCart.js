import React, {useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import CartProduct from './CartProduct/CartProduct.js';
import { updateCart} from '../../services/total/actions';
import { addProduct, removeProduct, increaseP_Q, decreaseP_Q} from '../../services/cart/actions';

import './style.scss';

const FloatCart = () => {
  const [isOpen, openCart] = useState(false);
  const cartProducts = useSelector(s => s.cart.products);

  const dispatch = useDispatch();
  const cartTotal = useSelector(s => s.total.data);

  cartProducts.forEach(p => console.log(p.quantity));
  const totalQuantity = cartProducts.reduce((sum, p) => {
    sum += p.quantity;
    return sum;
  }, 0);

  const totalPrice = cartProducts.reduce((sum, p) => {
    sum += p.quantity * p.price;
    return sum;
  },0);

  const openFloatCart = () => {
    openCart(true);
  };

  const closeFloatCart = () => {
    openCart(false);
  };

  const proceedToCheckout = () => {
    if (!totalQuantity) {
      alert('Add some product in the cart!');
    } else {
      alert(
        `Checkout - Subtotal: ${totalPrice}$`
      );
    }
  }

  const products = cartProducts.map(p => {
    return (
        <CartProduct product={p} key={p.id} />
    )
  });

  const classes = ['float-cart'];

  if (!!isOpen) {
    classes.push('float-cart--open');
  }

  return <div className={classes.join(' ')}>
    {isOpen && (
      <div
          onClick={() => closeFloatCart()}
          className="float-cart__close-btn"
          >
            X
              </div>
    )}
    {!isOpen && (
      <span
          onClick={() => openFloatCart()}
          className="bag bag--float-cart-closed"
          >
            <span className="bag__quantity">{totalQuantity}</span>
          </span>
    )}

    <div className="float-cart__content">
      <div className="float-cart__header">
        <span className="bag">
          <span className="bag__quantity">{totalQuantity}</span>
        </span>
        <span className="header-title">Cart</span>
      </div>

      <div className="float-cart__shelf-container">
        {products}
        {!products.length && (
          <p className="shelf-empty">
            Add some products in the cart <br />
            :)
          </p>
        )}
      </div>

      <div className="float-cart__footer">
        <div className="sub-price">
          <p className="sub-price__val">
              {`${totalPrice}$`}
          </p>
        </div>
        <div onClick={() => proceedToCheckout()} className="buy-btn">
          Checkout
        </div>
      </div>

    </div>
  </div>
}

export default FloatCart;
