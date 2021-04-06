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
      buttons:['Esc', 'Know more about me']
    }).then(() => {
      swal({
        text: 'I am 26 year old man that wants to learn how to make efficient and comftarble websites with good visuals. For more of my works, feel free to visit my github!'
      })
    })
  }
  return (
    <div className= "search">
      <Link exact to= '/'>
      <h2 className="name">Weather App</h2>
      </Link>
      <button onClick= {about}>About</button>
      <SearchBar onSearch={onSearch}/>  
    </div>
  );
};

export default Nav;
