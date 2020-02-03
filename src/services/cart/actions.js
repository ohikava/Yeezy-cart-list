import { ADD_PRODUCT} from './actionTypes.js';

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product
});
