// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Internals
import '../index.css';

const TextArea = (props) => (
  <div>
    <label>{props.label}</label>
  <textarea
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeHolder}
    />
  </div>
);

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextArea;
