import { ADD_PRODUCT, REMOVE_PRODUCT, INCREASE_PRODUCT_QUANTITY, DECREASE_PRODUCT_QUANTITY} from './actionTypes.js';

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product
});



export const removeProduct = id => ({
  type: REMOVE_PRODUCT,
  payload: id
});

export const increaseP_Q = id => ({
  type: INCREASE_PRODUCT_QUANTITY,
  payload: id
});

export const decreaseP_Q = id => ({
  type: DECREASE_PRODUCT_QUANTITY,
  payload: id
})
