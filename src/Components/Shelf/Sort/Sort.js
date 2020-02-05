import React from 'react';
import PropTypes from 'prop-types';

import {useSelector, useDispatch} from 'react-redux';

import { updateSort } from '../../../services/sort/actions';
import Selectbox from '../../Selectbox/Selectbox.js';

const sortBy = [
  { value: '', label: 'Select'},
  { value: 'lowerprice', label: 'Lowest to highest'},
  { value: 'highestprice', label: 'Highest to lowest'}
];

const Sort = () => {
  const sort = useSelector(state => state.sort.type);
  const dispatch = useDispatch();

  return <div className="sort">
    Order by
    <Selectbox options={sortBy} handleOnChange={value => dispatch(updateSort(value))}/>
  </div>
};


export default Sort;
