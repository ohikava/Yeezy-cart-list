import React,{useState} from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({classes, label, handleCheckboxChange}) => {
  const [isChecked, check] = useState(false);

  return (
    <div className={classes}>
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={() => {
            check(!isChecked);

            handleCheckboxChange(label)
          }}
          />

          <span className="checkmark">{label}</span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  classes: PropTypes.string,
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired
}

export default Checkbox;
