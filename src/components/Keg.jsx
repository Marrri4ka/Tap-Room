import React from 'react';
import PropTypes from 'prop-types';

function Keg (props){
  return (
    <div>
      <h3>{props.name}</h3>
      <h4>{props.alcoholContent}</h4>
      <h5>{props.price}</h5>

    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired
}

export default Keg;
