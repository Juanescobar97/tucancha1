import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUniformes } from "../../redux/actions";

import "./catalogo.styles.css";
import Navbar from "../../components/navbar/navbar";
import Cards from "../../components/cards/cards";
import "./catalogo.styles.css";

function Home() {
  const dispatch = useDispatch();
  const allUniformes = useSelector((state) => state.allUniformes);
  const [filtered, setFiltered] = useState(allUniformes);
  const [searchString, setSearchString] = useState("");
  const [loading, setLoading] = useState(true);

  function handleChange(e) {
    e.preventDefault();
    setSearchString(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const filtered = allUniformes.filter((uniformes) =>
      uniformes.nombre.includes(searchString)
    );
    setFiltered(filtered);
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(getUniformes());
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="catalogo">
        <Navbar handleChange={handleChange} handleSubmit={handleSubmit} />
      <h2 className="cat-title">CANCHAS</h2>
      
      <div>
        <iframe
          className="ubi2"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d53565.60889103821!2d-60.719656803366284!3d-32.95495479212396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scanchas%20futbol%205%20rosario!5e0!3m2!1ses!2sar!4v1702865939108!5m2!1ses!2sar"
          width="1080"
          height="525"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
        </div>
  );
}

export default Home;
