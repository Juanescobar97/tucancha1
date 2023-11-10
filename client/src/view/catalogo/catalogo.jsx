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
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <h2 className="cat-title">Catálogo</h2>
      {loading ?(<p>Cargando...</p>) : (
        <Cards allUniformes={filtered.length > 0 ? filtered : allUniformes} />
        //Esto hace que si el allUniformes está vacio se rendericen las cards igual..
      )}
    </div>
  );
}

export default Home;
