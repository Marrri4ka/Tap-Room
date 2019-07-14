import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Switch, Route, Redirect} from 'react-router-dom';
import KegList from './components/KegList';
import NewKeg from './components/NewKeg';
import TestPage from './components/TestPage';
import Error404 from './components/Error404';
import Demo from './components/Demo';

// In your render...



class App extends React.Component{
  constructor(props) {
  super(props);

  this.state = {
    masterKegList: [],
    filteredKegList:[],
    isAuthenticated: false
  };
  this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  this.addKeg = this.addKeg.bind(this);
  this.onSearch = this.onSearch.bind(this);
  this.handleEditKeg = this.handleEditKeg.bind(this);
  this.onUnder10 = this.onUnder10.bind(this);
  this.sellKeg = this.sellKeg.bind(this);
  this.deleteKeg = this.deleteKeg.bind(this);
  this.authenticate = this.authenticate.bind(this);
  this.signout = this.signout.bind(this);
  }
  authenticate(cb) {
    alert("hello!");
    this.setState({isAuthenticated : true});
    setTimeout(cb, 100); // fake async
  }
  signout(cb) {
    this.setState({isAuthenticated : false});
    setTimeout(cb, 100);
  }

handleAddingNewKegToList(newKeg){
  var newMasterKegList = this.state.masterKegList.slice();
  newMasterKegList.push(newKeg);
  this.setState({masterKegList: newMasterKegList, filteredKegList: newMasterKegList});
}

onSearch(query){
  let filtered = this.state.masterKegList.filter(m=>
  m.newKeg.toLoweCase().startsWith(query.target.value.toLowerCase()));
  this.setState({masterKegList: this.state.masterKegList,filteredKegList: filtered });

}

addKeg(index){
  const newMasterKegList = [...this.state.masterKegList];
  newMasterKegList[index].pints++;
  this.setState({masterKegList:newMasterKegList,filteredKegList: newMasterKegList});

}

sellKeg(index){
  const newMasterKegList = [...this.state.masterKegList];
  newMasterKegList[index].pints--;
  this.setState({masterKegList:newMasterKegList,filteredKegList: newMasterKegList});

}

handleEditKeg(newKeg){
    const newMasterKegList = [...this.state.masterKegList];
    newMasterKegList[newKeg.index] = newKeg;
    this.setState({masterKegList:newMasterKegList ,filteredKegList: newMasterKegList});
}

deleteKeg(index){
    const newMasterKegList = [...this.state.masterKegList];
    newMasterKegList.splice(index,1);
    this.setState({masterKegList:newMasterKegList,filteredKegList: newMasterKegList});
}

onUnder10(){
  let filtered = this.state.masterKegList.filter(m=>
  parseInt(m.pints)<=10);
  this.setState ({masterKegList: this.state.masterKegList, filteredKegList: filtered});
}

render(){
  return (
    <div>

      <Demo/>


      <Switch>

        <Route exact path='/' render={()=><Home onSearch={this.onSearch} onUnder10={this.onUnder10} onLogin = {this.authenticate}/>}/>
        <Route path='/newkeg' render={()=><NewKeg onNewKegCreation={this.handleAddingNewKegToList} onLogin = {this.authenticate} />} />
        <Route path='/allkegs' render={()=><KegList kegListProperty={this.state.filteredKegList} addKeg={this.addKeg} onUnder10={this.onUnder10} sellKeg={this.sellKeg} deleteKeg={this.deleteKeg} onLogin = {this.authenticate}/>}/>
        <Route path='/keg/:index' render={()=><NewKeg onNewKegCreation={this.handleEditKeg}  kegListProperty={this.state.masterKegList} onLogin = {this.authenticate} />} />

      </Switch>
    </div>
  );
}
}

export default App;
