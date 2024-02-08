import "./landing.styles.css";
import Navbar from "../../components/navbar/navbar";

function Landing() {
  return (
    <div className="landing">
      <Navbar />
      <h2 className="titulo">RESERVAR NUNCA FUE TAN FÁCIL</h2>
      <h4 className="titulo">CANCHAS DISPONIBLES</h4>

      <div className="filtros">
        <div class="dropdown">
          <button class="dropbtn"> Filtros </button>
          <div class="dropdown-content">
            <a href="#"> Futbol 5 </a>
            <a href="#"> Futbol 7 </a>
            <a href="#"> Futbol 8 </a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn"> Avanzado </button>
          <div class="dropdown-content">
            <a href="#"> Parrillero </a>
            <a href="#"> Grabado </a>
            <a href="#"> Bebidas </a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn"> Día </button>
          <div class="dropdown-content">
            <a href="#"> Lunes </a>
            <a href="#"> Martes </a>
            <a href="#"> Miercoles </a>
            <a href="#"> Jueves </a>
            <a href="#"> Viernes </a>
            <a href="#"> Sábado </a>
            <a href="#"> Domingo </a>
          </div>
          </div>
          <div class="dropdown">
          <button class="dropbtn"> Ordenar </button>
          <div class="dropdown-content">
            <a href="#"> Horario </a>
            <a href="#"> Disponibles </a>
            <a href="#"> Precios bajos a altos </a>
            <a href="#"> Precios altos a bajos </a>
          </div>
        </div>
          <input className="input" placeholder="Ingrese complejo/club"></input>
          <button className="search"><img className="lupa" src="https://media-public.canva.com/gyG3Q/MAE-ZggyG3Q/1/tl.png" alt="lupa" /></button>
      </div>
      <div className="dias">
        <button className="btndia">Hoy </button>
        <button className="btndia">Mar 23</button>
        <button className="btndia">Mie 24</button>
        <button className="btndia">Jue 25</button>
        <button className="btndia">Vie 26</button>
        <button className="btndia">Sab 27</button>
        <button className="btndia">Dom 28</button>
        <button className="btndia">Lun 29</button>
        <button className="btndia">Mar 30</button>
        <button className="btndia">Mie 31</button>
        <button className="btndia">Jue 01</button>
        <button className="btndia">Vie 02</button>
        <button className="btndia">Sab 03</button>
        <button className="btndia">Dom 04</button>
        <button className="btndia">Lun 05</button>
      </div>
      <div>
        <p>Hoy, Lunes 22, Enero, 2024</p>
      </div>
    </div>
  );
}

export default Landing;
