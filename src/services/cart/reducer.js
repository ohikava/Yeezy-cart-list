import {ADD_PRODUCT} from './actionTypes.js';

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        productToAdd: Object.assign({}, action.payload)
      };
    default:
      return state;
  }
}
