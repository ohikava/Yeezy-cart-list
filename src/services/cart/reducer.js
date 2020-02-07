import {ADD_PRODUCT, REMOVE_PRODUCT, INCREASE_PRODUCT_QUANTITY, DECREASE_PRODUCT_QUANTITY} from './actionTypes.js';

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_PRODUCT:
      let newProducts;
      const alreadyInCart = state.products.some(p => p.id === action.payload.id);
      if (alreadyInCart) {
          newProducts = state.products.map(p => {
          if (p.id === action.payload.id) {
            p.quantity += 1;
          }
          return p;
        });
      } else {
          action.payload.quantity  = 1;
          newProducts = state.products.concat([action.payload]);
      }
      return {
        ...state,
        products: newProducts
      };

    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(p => p.id !== action.payload)
      };

    case INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map(p => {
          if (p.id === action.payload) {
            p.quantity += 1;
          }
          return p;
        })
      };

    case DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map(p => {
          if (p.id === action.payload) {
            p.quantity -= 1;
          }
          return p;
        })
      };

    default:
      return state;
  }
}
