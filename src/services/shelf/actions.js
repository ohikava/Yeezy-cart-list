import { FETCH_PRODUCTS } from './actionTypes';
import axios from 'axios';

import productsAPI from '../util/index.js';

const compare = {
  lowerprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  }
};

export const fetchProducts = (filters, sortBy, callback) => dispatch => {
  return axios
      .get(productsAPI)
      .then(res => {
        let products = res.data;
        if (!!filters && filters.size > 0) {
          console.log(filters)
          products = products.filter(p => {
            return p.availableSizes.split(';').some(s => filters.has(s));
          });
        }

        if (!!sortBy) {
          products = products.sort(compare[sortBy]);
        }

        if (!!callback) {
          callback();
        }
        return dispatch({
          type: FETCH_PRODUCTS,
          payload: products
        });
      })
        .catch(err => {
          console.error(err)
          console.log('Could not fetch products. Try again later');
        });
};
