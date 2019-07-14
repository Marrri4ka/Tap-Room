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
  zIndex: "2",
  marginRight:'10px'
}

let placeStyle = {
  position: "relative",
  top: "80px",
  zIndex: "3"
}
  return (
    <div>
    <div><Header onUnder10Property={props.onUnder10}/></div>



      <div>
          <img  style={imageStyle}  src = {taproom}/>
          <div  style={placeStyle}>
          <div class='container'>
            <div className='row' >
              {
                props.kegListProperty.map((keg,index)=>
                <div >
                                  <img src="http://picsum.photos/350/400"/>
                  <div  className='col-md-2'/>
                  <Keg img = 'https://images.unsplash.com/photo-1487260211189-670c54da558d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' brand="lorem" names={keg.names}

                    price={keg.price}
                    kegs={keg.kegs}
                    pints={keg.pints}
                    index={index}
                   alcoholContent={keg.alcoholContent}
                   addKeg={props.addKeg}
                   sellKeg={props.sellKeg}
                   deleteKeg={props.deleteKeg} />
                  <div className='col-md-2'/>
                  </div>
              )}
            </div>
            </div>
          </div>
          </div>

        </div>
  );
}

KegList.propTypes = {
  kegListProperty: PropTypes.array,
  addKeg: PropTypes.func,
  onSearch: PropTypes.func,
  onUnder10: PropTypes.func,
  sellKeg: PropTypes.func,
  deleteKeg: PropTypes.func,
    onLogin: PropTypes.func
};

export default KegList;
