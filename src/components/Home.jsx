import React from 'react';
import taproom from '../assets/img/taproom.png';
import Header from './Header';

function Home(){
  return(
    <div>
    <Header/>
    <img src={taproom}/>
    </div>
  );
}

export default Home;
