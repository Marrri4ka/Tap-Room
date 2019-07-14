import React from 'react';
import taproom from '../assets/img/taproom.png';
import Header from './Header';
import PropTypes from 'prop-types';

class Home extends React.Component{
constructor(props){
  super(props);
}
render(){
  return(
    <div>
    <Header  onChange = {this.props.onSearch} onUnder10Property={this.props.onUnder10} onLogin = {this.props.onLogin}/>
    <img src={taproom} />
    </div>
  );
}
}

Home.propTypes={
  onSearch: PropTypes.func,
  onUnder10: PropTypes.func,
  onLogin: PropTypes.func

}

export default Home;
