import React from 'react';
//import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import {Link} from 'react-router-dom';
 

function Nav({onSearch}) { //onSearch= significa que le das un atributo con el valor {onSearch}
  return (
    <div className= "search">
      <Link exact to= '/'>
      <h2 className="name">Weather App</h2>
      </Link>
      <Link to= '/about'>
        <span>About</span>
      </Link>
      <SearchBar onSearch={onSearch}/>  
    </div>
  );
};

export default Nav;
