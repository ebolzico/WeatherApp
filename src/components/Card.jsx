import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom'

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="whole">

      <button className="button" onClick= {onClose}>X</button>
      <Link to={`/ciudad/${id}`}>
      <div className="ciudad">{name}</div>
      </Link>
      <div className="content">
        <div className="temp">
          <p className="max">MIN: {max}°</p>
          <p className="min">MAX: {max}°</p>
        </div>
        <img className="img" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt= "current climate img"/>
      </div>
    </div>  
    
    );
};
