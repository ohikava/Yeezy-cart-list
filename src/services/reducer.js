import { combineReducers } from 'redux';
import cartReducer from './cart/reducer';
import sortReducer from './sort/reducer';
import shelfReducer from './shelf/reducer';
import filterReducer from './filters/reducer';

export default combineReducers({
  cart: cartReducer,
  sort: sortReducer,
  shelf: shelfReducer,
  filter: filterReducer
});
