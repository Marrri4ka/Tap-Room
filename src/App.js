import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Switch, Route} from 'react-router-dom';
import KegList from './components/KegList';
import NewKeg from './components/NewKeg';

class App extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    masterKegList: []
  };
  this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
}

handleAddingNewKegToList(newKeg){
  var newMasterTicketList = this.state.masterTicketList.slice();
  newMasterTicketList.push(newKeg);
  this.setState({masterKegList: newMasterTicketList});
}
render(){
  return (
    <div>
      <Switch>
        <Route path='/' render={()=><KegList keglist={this.state.masterKegList}/>}/>
        <Route path='/newkeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
        <Route path='/allkegs' component ={KegList}/>
      </Switch>
        <Home/>
    </div>

  );
}
}

export default App;
