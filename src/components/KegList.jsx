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
            <div className='row'>
              <div className='col-md-1'/>
              <Keg img = 'https://picsum.photos/200/400' brand="lorem" name="GERMAN PILSNER"  price= "$6" alcoholContent= "ABV 5.4%|35 IBU" />

              <div className='col-md-1'/>
            </div>
            </div>
          </div>
          <div>
            {props.kegListProperty.map((keg)=>
              <Keg names={keg.names}/>
            )}
          </div>
        </div>
  );
}

KegList.propTypes = {
  kegListProperty: PropTypes.array
};

export default KegList;
