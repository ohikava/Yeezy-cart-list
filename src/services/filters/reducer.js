import { UPDATE_FILTER } from './actionTypes';

const initialState = {
  items: new Set([])
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILTER:
      const items = new Set(state.items);
      if (items.has(action.payload)) {
        items.delete(action.payload);
      } else {
        items.add(action.payload);
      }
      return {
        ...state,
        items: items
      };
    default:
      return state;
  }
}
