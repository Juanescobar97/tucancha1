import "./navbar.styles.css";
import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <a href="/"><img
        className="logo"
        src="https://i.ibb.co/WWYhTsF/Dise-o-sin-t-tulo-removebg-preview-1.png"
        alt="logo"
      /></a>
      <ul>
        <div className="botones">
          <li>
            <img className="pelota" src="https://media-public.canva.com/NlhKo/MAFrOYNlhKo/1/tl.png" alt="pelota" />
            <h8>en  vivo</h8>
            <a href="/">¡AHORA!</a>
          </li>
          <li>
            <img className="cancha" src="https://i.ibb.co/cc0s8KJ/cancha.png" alt="cancha" />
            <a href="/catalogo">CANCHAS</a>
          </li>
          <li>
            <img className="camiseta" src="https://i.ibb.co/ZT0SzpL/camiseta.png" alt="camiseta" />
            <a href="">SE BUSCA RIVAL</a>
          </li>
          <li >
            <img className="perfil" src="https://i.ibb.co/stFZYND/perfil.png" alt="perfil" />
            <a href="/carrito">PERFIL</a>
          </li>
          <li >
            <img className="contactoimg" src="https://i.ibb.co/hV09Mj3/contacto-1.png" alt="contacto" />
            <a href="/contacto">CONTACTO</a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
