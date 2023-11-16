import "./landing.styles.css";
import Navbar from "../../components/navbar/navbar";

function Landing() {
  return (
    <div className="landing">
      <Navbar />
      <p>Te presentamos nuestra Tienda Virtual</p>

      <h1 className="abajo">Que bueno verte por acá!</h1>
    </div>
  );
}

export default Landing;
