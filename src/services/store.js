import {createStore} from 'redux';
import rootReducer from './reducer.js';

export default initialState => {
  const store = createStore(
    rootReducer,
    initialState
  );

  return store;
}
