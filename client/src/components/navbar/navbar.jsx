import "./navbar.styles.css"
import React from "react"

function Navbar({handleChange, handleSubmit}) {
  return (
    <div className="navbar">
      <form onChange={handleChange}>
        <input  placeholder="Ingrese nombre de la escuela" type="search"></input>
        <button type="submit" onClick={handleSubmit}>Buscar</button>
      </form>
    </div>
  );
}

export default Navbar;
