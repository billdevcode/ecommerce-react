// Dependencies
import React from 'react';
import PropTypes from 'prop-types';


const Textarea = ({ label, onChange, placeholder, value }) => (
  <div>
    <label>{label}</label>
    <textarea
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  </div>
);

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Textarea;
