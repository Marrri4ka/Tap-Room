import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
  return (

<div>
<nav class="navbar navbar-expand-lg navbar-dark unique-color">

  <a class="navbar-brand" href="#">Navbar</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="basicExampleNav">

    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to='/newkeg'><a class="nav-link" href="#">New Keg
          <span class="sr-only">(current)</span>
        </a></Link>
      </li>
      <li class="nav-item">
      <Link to='/allkegs'>  <a class="nav-link" href="#">All kegs</a></Link>
      </li>

    <button onClick={()=> this.props.onUder10Property}>Less than 10</button>


    </ul>

    <form class="form-inline">
      <div class="md-form my-0">
        <input  onChange = {this.props.onSearch}class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
      </div>
    </form>
  </div>

</nav>
</div>

  );
}
}

Header.propTypes = {
  onSearch: PropTypes.func,
  onUder10Property: PropTypes.func

}


export default Header;
