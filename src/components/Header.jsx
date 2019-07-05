import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active">Home</a>
        <a class="nav-item nav-link">Log in</a>
        <a class="nav-item nav-link"><Link to='/newkeg'>New keg</Link></a>
        <a class="nav-item nav-link"><Link to='/allkegs'>All kegs</Link></a>

      </div>
    </div>
  </nav>
  );
}


export default Header;
