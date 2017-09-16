// Dependencies
import React from 'react';
import PropTypes from 'prop-types';


const Options = ({ toggleFilter, options }) => {
  const { showBottoms, showDresses, showLarge, showMedium, showSmall, showTops } = options;

  return (
    <div className="options">
      <div className="col s8 offset-s2 m4 offset-m4 center category-picker">
        <p>Pick one category</p>
        <input
          checked={showDresses}
          id="dresses-checkbox"
          onChange={() => toggleFilter('showDresses')}
          type="checkbox"
        />
        <label htmlFor="dresses-checkbox">Dresses</label>

        <input
          checked={showTops}
          id="tops-checkbox"
          onChange={() => toggleFilter('showTops')}
          type="checkbox"
        />
        <label htmlFor="tops-checkbox">Tops</label>

        <input
          checked={showBottoms}
          id="bottoms-checkbox"
          onChange={() => toggleFilter('showBottoms')}
          type="checkbox"
        />
        <label htmlFor="bottoms-checkbox">Bottoms</label>
      </div>
      <div className="col s8 offset-s2 m4 offset-m4 center size-picker">
        <p>Pick one size</p>
        <input
          checked={showSmall}
          id="small-checkbox"
          onChange={() => toggleFilter('showSmall')}
          type="checkbox"
        />
        <label htmlFor="small-checkbox">Small</label>

        <input
          checked={showMedium}
          id="medium-checkbox"
          onChange={() => toggleFilter('showMedium')}
          type="checkbox"
        />
        <label htmlFor="medium-checkbox">Medium</label>

        <input
          checked={showLarge}
          id="large-checkbox"
          onChange={() => toggleFilter('showLarge')}
          type="checkbox"
        />
        <label htmlFor="large-checkbox">Large</label>
      </div>
    </div>
  );
};

Options.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
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
