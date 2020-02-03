import { combineReducers } from 'redux';
import cartReducer from './cart/reducer';
import sortReducer from './sort/reducer';

export default combineReducers({
  cart: cartReducer,
  sort: sortReducer
});
