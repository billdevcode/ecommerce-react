import React, { PropTypes } from 'react';
import '../index.css';

const Field = (props) => (
  <div>
    <label>{props.label}</label>
    <input
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeHolder}
    />
  </div>
);

Field.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Field;
