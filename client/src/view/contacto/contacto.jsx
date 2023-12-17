import './contacto.styles.css';
import Navbar from '../../components/navbar/navbar';

function Contacto() {
  return (
    <div className='contacto'>
      <Navbar />
      <hr />
      <h1>CONTACTO</h1>
      <div className='div'>
        <a href="https://web.whatsapp.com/send/?phone=543413123573&text=Hola%2C+queria+saber+si+tenias+stock+y+precios+de+.."><img className="wpp" src="https://media-public.canva.com/fpNE4/MAFu2tfpNE4/1/tl.png" alt="Whatsapp" /><h5 className='num' >3413123573</h5></a>
      <a href="https://www.instagram.com/cuatrodeseosuniformes/"><img className="insta" src="https://media-public.canva.com/at1ys/MAD2UQat1ys/1/tl.png" alt="insta" />
      <h5 className='ig1'>@CUATRODESEOSUNIFORMES</h5></a>
      <img className="ubi" src="https://media-public.canva.com/_DEKE/MAEzRW_DEKE/1/tl.png" alt="ubicacion" />
      <h5>Campbell 2472, Rosario, Santa Fe</h5>
      </div>
      <div >
      <iframe className='ubi1' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.750859616767!2d-60.71007122503538!3d-32.95758657243993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7acc308c494ff%3A0x71bb79ac3116ffa7!2sCampbell%202472%2C%20S2009DTN%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1700520426089!5m2!1ses-419!2sar" width="400" height="300" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      
    </div>
  );
}

export default Contacto;
