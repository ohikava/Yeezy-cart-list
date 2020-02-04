import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducer.js';
import thunk from 'redux-thunk';

export default initialState => {
  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
  );

  return store;
}
