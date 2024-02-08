import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Form from "./components/form/form";

import "./App.css"

import Carrito from "./view/carrito/carrito";
import Contacto from "./view/contacto/contacto";
import Catalogo from "./view/catalogo/catalogo";
import Landing from "./view/landing/landing"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/" element={<Landing/>} />
          <Route exact path="/catalogo" element={<Catalogo/>} />
          <Route path="/catalogo/:id" element={<Carrito/>} />
          <Route path="/carrito" element={<Carrito/>} />
          <Route path="/contacto" element={<Contacto/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
