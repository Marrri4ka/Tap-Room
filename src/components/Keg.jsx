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
    <div style={{height:"10px"}}>
    <div style={{backgroundColor: (props.alcoholContent)<10 ?'grey' : 'red'}} weight="20px">
<Link to ={"/keg/" + props.index}> <h3>{props.names}</h3> </Link>

           <h4 >{props.alcoholContent}</h4>
           <h4>${props.price}</h4>
            <span>Pints:{props.pints}</span><br/>
           <MDBBtn onClick={()=>props.addKeg(props.index)}color="unique">Add pint</MDBBtn><br/>
            <MDBBtn onClick={()=>props.sellKeg(props.index)}color="unique">Sell pint</MDBBtn><br/>
            <MDBBtn onClick={()=>props.deleteKeg(props.index)}color="unique">Delete</MDBBtn>
</div>
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
