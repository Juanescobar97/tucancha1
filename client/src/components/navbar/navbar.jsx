import "./navbar.styles.css"
import React from "react"

function Navbar({handleChange, handleSubmit}) {
  return (
    <div className="fija">
            {/* <img className="logoig" src="https://media-public.canva.com/y-KeA/MADzG9y-KeA/2/tl.png" alt="logoig" /> */}

            <a href="/"><img className="logo" src="https://i.ibb.co/JrJ0673/cuatro-deseos-SIN-FONDO.png" alt="logo" /></a>
      <ul className="ul">
      <li className="hccc" ><a href="/" >HOME</a></li>
      <li className="hccc" ><a href="/catalogo">CATÁLOGO</a></li>
      <li className="hccc" ><a href="/contacto" >CONTACTO</a></li>
      <li className="hccc" ><a href="/carrito" >CARRITO</a></li>
      </ul>
      <li className="form"><form onChange={handleChange}>
        <input className="input"  placeholder="Ingrese nombre de la escuela" type="search"></input>
        <button className="btn" type="submit" onClick={handleSubmit}>{<img className="lupa" src="https://media-public.canva.com/zhMpA/MAD5-NzhMpA/1/tl.png" />}</button>
      </form></li>
    </div>
  );
}

export default Navbar;
