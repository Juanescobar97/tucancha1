import "./card.styles.css";
import { Link } from "react-router-dom";

function Card({ uniforme }) {
  const { nombre, division, prenda, img, id } = uniforme;

  return (
    <div className="card-container">
      <Link className="link" to={`/catalogo/${id}`}>
        <img className="img-container" src={img} alt="uniforme" />
        <h4 className="nombre">{nombre}</h4>
        <p className="nombre">{division}</p>
        <a className="nombre">{prenda}</a>
      </Link>
    </div>
  );
}

export default Card;
