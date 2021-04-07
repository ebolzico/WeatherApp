import React, { useState } from "react";
import './searchBar.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState(""); // >>>> Esto es un Hook!
  return (
    
    <form className="form" 
      onSubmit={(e) => {
        e.preventDefault(); // default: agregar=refresh, yo no quiero eso, por eso cuando le doy
        onSearch(city);     // agregar, que ejecute onSearch
        setCity('')
    }}>
      <input
        className="input"
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={e => setCity(e.target.value)}// Modifica city cuando haya un cambio en el target
      />
      <input className="button" type="submit" value="Agregar" />
    </form>
          // este input, que tiene del tipo submit, cuando activa, hace una accion del tipo
  );      // "submit". Eso activa el onSubmit que esta arriba (que actua como un event listener)
}         // y hace todo el recorrido de la funcion
