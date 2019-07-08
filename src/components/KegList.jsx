import React from 'react';
import Keg from './Keg';
import Header from './Header';
import taproom from '../assets/img/taproom.png';
import PropTypes from 'prop-types';


function KegList(props){

  let divStyle = {
  position: "relative",
  zIndex: "1"
}

let imageStyle = {
  position: "absolute",
  zIndex: "2"
}

let placeStyle = {
  position: "relative",
  top: "300px",
  zIndex: "3"
}
  return (
    <div>
    <div><Header/></div>



      <div style={divStyle}>
          <img  style={imageStyle}  src = {taproom}/>
          <div  style={placeStyle}>
              {
                props.kegListProperty.map((keg,index)=>
                <div className='row'>
                  <div className='col-md-1'/>
                  <Keg img = 'https://images.unsplash.com/photo-1487260211189-670c54da558d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' brand="lorem" names={keg.names}
                    price={keg.price}
                    kegs={keg.kegs}
                    index={index}
                   alcoholContent={keg.alcoholContent}
                   addKeg={props.addKeg} />
                  <div className='col-md-1'/>
                  </div>
              )}
            </div>
          </div>

        </div>
  );
}

KegList.propTypes = {
  kegListProperty: PropTypes.array,
  addKeg: PropTypes.func
};

export default KegList;
