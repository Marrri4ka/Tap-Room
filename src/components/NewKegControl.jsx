import React from 'react';
import PropTypes from 'prop-types';
import NewKeg from './NewKeg';


class NewKegControl extends React.Component{

  constructor(props){
    super(props);
    this.state={
      formVisibleOnPage: false
    };
  
  }

  render(){
    if(this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewKeg onNewKegCreation={this.props.onNewKegCreation}/>;
    } else {

    }
  }

}
NewKegControl.propTypes={
  onNewKegCreation: PropTypes.func

};

export default NewKegControl;
