import React from 'react';
import PropTypes from 'prop-types';
import { MDBBtn } from "mdbreact";
import {Link} from 'react-router-dom';

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
    <div style={{backgroundColor:'white'}}>
<Link to ={"/keg/" + props.index}> <h3>{props.names}</h3> </Link>

           <h4 >{props.alcoholContent}</h4>
           <a href="#" class="btn btn-primary">{props.price}</a>
            <span>Pints:{props.pints}</span>
           <MDBBtn onClick={()=>props.addKeg(props.index)}color="unique">Add pint</MDBBtn>
            <MDBBtn onClick={()=>props.sellKeg(props.index)}color="unique">Sell pint</MDBBtn>
            <MDBBtn onClick={()=>props.deleteKeg(props.index)}color="unique">Delete</MDBBtn>
</div>


  );
}

Keg.propTypes = {
  names: PropTypes.string.isRequired,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  img: PropTypes.string,
  addKeg: PropTypes.func,
  kegs: PropTypes.string,
  index: PropTypes.number,
  pints: PropTypes.number,
  sellKeg: PropTypes.func,
  deleteKeg: PropTypes.func

}

export default Keg;
