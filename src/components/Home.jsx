import React from 'react';
import taproom from '../assets/img/taproom.png';
import Header from './Header';
import PropTypes from 'prop-types';

class Home extends React.Component{
constructor(props){
  super(props);
}
rendre(){
  return(
    <div>
    <Header  onChange = {this.props.onSearch}/>
    <img src={taproom}/>
    </div>
  );
}
}

export default Home;
