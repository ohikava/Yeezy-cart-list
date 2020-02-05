import { UPDATE_FILTER } from './actionTypes';

export const updateFilters = filter => ({
  type: UPDATE_FILTER,
  payload: filter
});
