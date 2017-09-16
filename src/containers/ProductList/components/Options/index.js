// Dependencies
import React from 'react';
import PropTypes from 'prop-types';


const Options = ({ addFilter, options }) => {
  const { showBottoms, showDresses, showLarge, showMedium, showSmall, showTops } = options;

  return (
    <div className="options">
      <div className="col s8 offset-s2 m4 offset-m4 center category-picker">
        <p>Pick one category</p>
        <input
          checked={showDresses}
          onClick={addFilter}
          type="checkbox"
          value="dresses"
          id="dresses-checkbox"
        />
        <label htmlFor="dresses-checkbox">Dresses</label>

        <input
          checked={showTops}
          onClick={addFilter}
          type="checkbox"
          value="tops"
          id="tops-checkbox"
        />
        <label htmlFor="tops-checkbox">Tops</label>

        <input
          checked={showBottoms}
          onClick={addFilter}
          type="checkbox"
          value="bottoms"
          id="bottoms-checkbox"
        />
        <label htmlFor="bottoms-checkbox">Bottoms</label>
      </div>
      <div className="col s8 offset-s2 m4 offset-m4 center size-picker">
        <p>Pick one size</p>
        <input
          checked={showSmall}
          onClick={addFilter}
          type="checkbox"
          value="small"
          id="small-checkbox"
        />
        <label htmlFor="small-checkbox">Small</label>

        <input
          checked={showMedium}
          onClick={addFilter}
          type="checkbox"
          value="medium"
          id="medium-checkbox"
        />
        <label htmlFor="medium-checkbox">Medium</label>

        <input
          checked={showLarge}
          onClick={addFilter}
          type="checkbox"
          value="large"
          id="large-checkbox"
        />
        <label htmlFor="large-checkbox">Large</label>
      </div>
    </div>
  );
};

Options.propTypes = {
  addFilter: PropTypes.func.isRequired,
  options: PropTypes.shape({
    showBottoms: PropTypes.bool.isRequired,
    showDresses: PropTypes.bool.isRequired,
    showLarge: PropTypes.bool.isRequired,
    showMedium: PropTypes.bool.isRequired,
    showSmall: PropTypes.bool.isRequired,
    showTops: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Options;
