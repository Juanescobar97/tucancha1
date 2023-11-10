import "./card.styles.css";
import { Link } from "react-router-dom";

function Card({ uniforme }) {
  const { nombre, division, prenda, img, id } = uniforme;

  return (
    <div className="card-container">
      <Link to={`/catalogo/${id}`}>
        <img className="img-container" src={img} alt="uniforme" />
        <p>{nombre}</p>
        <p>{division}</p>
        <h4>{prenda}</h4>
      </Link>
    </div>
  );
}

export default Card;
