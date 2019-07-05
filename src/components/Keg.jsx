import React from 'react';
import PropTypes from 'prop-types';

function Keg (props){

  let container = {
  padding: '10px'
  }
  let topleft = {
  position: 'absolute',
  top: '8px',
  left: '16px'
  }
  return (
   <div style={container} className='col-md-2'>
       <div class="card" style={{width: '1rem;'}}>
         <img src={props.img}/>
         <div style={topleft}>
         <div class="card-body">
           <h5 class="card-title"><h3>{props.names}</h3></h5>
           <p class="card-text">
           <h4>{props.alcoholContent}</h4></p>
           <a href="#" class="btn btn-primary">{props.price}</a>
         </div>
       </div>
   </div>
 </div>


  );
}

Keg.propTypes = {
  names: PropTypes.string.isRequired,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  img: PropTypes.string
}

export default Keg;
