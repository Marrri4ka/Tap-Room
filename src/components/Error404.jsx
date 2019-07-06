import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import error from '../assets/img/error1.png';


function Error404(props){
  return(
    <div>

    <img src ={error}/>
    <h3>Would you like to go to <Link to="/">home</Link></h3>
    </div>
  );
}

Error404.propTypes={
  location: PropTypes.object
};

export default Error404;
