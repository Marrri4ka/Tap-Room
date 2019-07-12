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
    masterKegList: [],
    filteredKegList:[]
  };
  this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  this.addKeg = this.addKeg.bind(this);
  this.onSearch = this.onSearch.bind(this);
  this.handleEditKeg = this.handleEditKeg.bind(this);
}

handleAddingNewKegToList(newKeg){
  newKeg.kegs=124;
  var newmasterKegList = this.state.masterKegList.slice();
  newmasterKegList.push(newKeg);
  this.setState({masterKegList: newmasterKegList});
}

onSearch(query){
  let filtered = this.state.masterKegList.filter(m=>
  m.newKeg.toLoweCase().startsWith(query.target.value.toLowerCase()));
  this.setState({masterKegList: this.state.masterKegList,filteredKegList: filtered });

}

addKeg(index){
  const newMasterKegList = [...this.state.masterKegList];
  newMasterKegList[index].kegs++;
  this.setState({masterKegList:newMasterKegList});

}

handleEditKeg(newKeg){
    const newMasterKegList = [...this.state.masterKegList];
    newMasterKegList[newKeg.index] = newKeg;
    this.setState({masterKegList:newMasterKegList });



}

render(){
  return (
    <div>
      <Switch>
        <Route exact path='/' render={()=><Home onSearch={this.onSearch}/>}/>
        <Route path='/newkeg' render={()=><NewKeg onNewKegCreation={this.handleAddingNewKegToList} />} />
        <Route path='/allkegs' render={()=><KegList kegListProperty={this.state.masterKegList} addKeg={this.addKeg}/>}/>
        <Route path='/keg/:index' render={()=><NewKeg onNewKegCreation={this.handleEditKeg}  kegListProperty={this.state.masterKegList} />} />

      </Switch>
    </div>
  );
}
}

export default App;
