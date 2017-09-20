// Dependencies
import React from 'react';
import PropTypes from 'prop-types';


const Field = ({ label, onChange, placeholder, value }) => (
  <div>
    <label>{label}</label>
    <input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  </div>
);

Field.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Field;
