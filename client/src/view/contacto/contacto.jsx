import './contacto.styles.css';
import Navbar from '../../components/navbar/navbar';

function Contacto() {
  return (
    <div className='contacto'>
      <Navbar />
      <hr />
      <h1>CONTACTO</h1>
      <div>
      <hr />
      <hr />
        <a href="https://web.whatsapp.com/send/?phone=543413123573&text=Hola%2C+queria+saber+si+tenias+stock+y+precios+de+.."><img className="wpp" src="https://media-public.canva.com/fpNE4/MAFu2tfpNE4/1/tl.png" alt="Whatsapp" /><h5 className='num' >3413123573</h5></a>
      <a href="https://www.instagram.com/cuatrodeseosuniformes/"><img className="insta" src="https://media-public.canva.com/at1ys/MAD2UQat1ys/1/tl.png" alt="insta" />
      <h5>@CUATRODESEOSUNIFORMES</h5></a>

      <img className="ubi" src="https://media-public.canva.com/_DEKE/MAEzRW_DEKE/1/tl.png" alt="ubicacion" />
      <h5>Campbell 2472, Rosario, Santa Fe</h5>

      </div>
      
    </div>
  );
}

export default Contacto;
