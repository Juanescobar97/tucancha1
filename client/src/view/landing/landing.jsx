import "./landing.styles.css";
import Navbar from "../../components/navbar/navbar";

function Landing() {
  return (
    <div className="landing">
      <Navbar />
      <h1 className="titulo">TIENDA CUATRO DESEOS</h1>
      <p className="subtitulo">VENTA DE UNIFORMES ESCOLARES Y MUCHO MÁS</p>
      <img className="logo2" src="https://i.ibb.co/8YM2SDf/logo.png" alt="Logo" />
      <h1 className="abajo">Que bueno verte por acá!</h1>
    </div>
  );
}

export default Landing;
