import React from 'react';
import Keg from './Keg';
import Header from './Header';
import taproom from '../assets/img/taproom.png';


function KegList(){

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
              <Keg img = 'https://picsum.photos/200/400' name="GERMAN PILSNER"  price= "$6" alcoholContent= "ABV 5.4%|35 IBU" />

              <div className='col-md-1'/>
            </div>
            </div>
          </div>
        </div>
  );
}

export default KegList;
