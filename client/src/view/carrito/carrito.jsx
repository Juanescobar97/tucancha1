import './carrito.styles.css';
import Navbar from '../../components/navbar/navbar';


function Carrito() {
  return (
    <div className='carrito'>
      <Navbar />
      <p className='car-title'>Estás en el carrito</p>
    </div>
  );
}

export default Carrito;
