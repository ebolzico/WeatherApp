import React from 'react';
//import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import {Link} from 'react-router-dom';
import swal from 'sweetalert'

function Nav({onSearch}) { //onSearch= significa que le das un atributo con el valor {onSearch}
  function about(){
    swal({
      title: 'App by Emanuel Bolzico',
      text: 'This is a non-profit app, developed with the purpouse of learning new habilities',
      buttons:['Esc', 'Know more about the app']
    }).then(() => {
      swal({
        text: 'This app was made using React technology and is front-end only. It includes pure CSS for the styiling and a multi-component render'
      })
    })
  }
  return (
    <div className= "search">
      <Link exact to= '/'>
      <h2 className="name">Weather App</h2>
      <h6 className="name">By Emanuel Bolzico</h6>
      </Link>
      <SearchBar onSearch={onSearch}/>  
      <button className="aboutBtn" onClick= {about}>About</button>
    </div>
  );
};

export default Nav;
