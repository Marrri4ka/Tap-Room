import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Switch, Route, Redirect} from 'react-router-dom';
import KegList from './components/KegList';
import NewKeg from './components/NewKeg';
import TestPage from './components/TestPage';
import Error404 from './components/Error404';


class App extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    masterKegList: []
  };
  this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  this.addKeg = this.addKeg.bind(this);
}

handleAddingNewKegToList(newKeg){
  newKeg.kegs=124;
  var newmasterKegList = this.state.masterKegList.slice();
  newmasterKegList.push(newKeg);
  this.setState({masterKegList: newmasterKegList});
}

addKeg(index){
  const newMasterKegList = [...this.state.masterKegList];
  newMasterKegList[index].kegs++;
  this.setState({masterKegList:newMasterKegList});

}

render(){
  return (
    <div>
      <Switch>
        <Route exact path='/' render={()=><Home/>}/>
        <Route path='/newkeg' render={()=><NewKeg onNewKegCreation={this.handleAddingNewKegToList} />} />
        <Route path='/allkegs' render={()=><KegList kegListProperty={this.state.masterKegList} addKeg={this.addKeg}/>}/>
        <Route path='/test' render={()=><TestPage/>}/>
        <Route component = {Error404}/>
      </Switch>
    </div>
  );
}
}

export default App;
