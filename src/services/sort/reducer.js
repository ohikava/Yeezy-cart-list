import { UPDATE_SORT } from './actionTypes.js';

const initialState = {
  type: ''
};

export default function(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SORT:
      console.log(state)
      return {
        ...state,
        type: action.payload
      };
    default:
      return state;
  }
}
