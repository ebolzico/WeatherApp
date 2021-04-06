import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import {Route} from 'react-router-dom';
import About from './components/About.jsx';
import Ciudad from './components/Ciudad.jsx';
 


export default function App() {
  const [cities, setCities] = useState([]);
  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          var aux=cities.filter(ci => ci.id!== city.id)
          if (cities.length!==aux.length){
            swal({
              title: 'Error',
              text: 'The city you searched for is already'
            })
          }
        } else {
          setCities([...aux, ciudad]);
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  return (
    <div className="App">
      <Route
        path='/'
        render={() => <Nav onSearch={onSearch}/>} 
      />
      <Route
        exact path='/about'
        component={About}
      />  
      <Route
        path='/'
        render={() => <Cards onClose={onClose} cities={cities}/>}
      />
      <Route
        path='/ciudad/:ciudadId'
        render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
      />
    </div>
  );
}
