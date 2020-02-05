import React from 'react';
import Checkbox from '../Checkbox/Checkbox.js';
import './styles.scss';
import {updateFilters } from '../../services/filters/actions.js';
import {useDispatch} from 'react-redux';


const availableSizes = ["36.5", "43.5", "48", "48.5"];


const Filter = () => {
  const dispatch = useDispatch();

  const toggleCheckbox = label => {
    dispatch(updateFilters(label));
  }
  let createCheckbox = label => {
    return <Checkbox classes="filters-available-size"
      label={label}
      handleCheckboxChange={toggleCheckbox}
      key={label}
    />
  };

  createCheckbox =  availableSizes.map(createCheckbox);

  return <div className="filters">
    <h4 className="title">Sizes:</h4>
    {createCheckbox}
  </div>
}

export default Filter;
