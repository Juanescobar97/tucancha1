const { Router } = require("express");
const {
  createUserHandler,
  getCatalogoHandler,
  getContactoHandler,
  getLandingHandler,
  getCataIDHandler,
} = require("../handlers/handlersRutas");
const {postCarritoHandler} = require("../handlers/postHandlers")

const rutas = Router();

rutas.get("/", getLandingHandler);
rutas.post("/users", createUserHandler);
rutas.get("/contacto", getContactoHandler);
rutas.get("/catalogo", getCatalogoHandler);
rutas.get("/catalogo/:id", getCataIDHandler);
rutas.post("/carrito", postCarritoHandler);

module.exports = rutas;

//el handler recibe la request
//Unifica datos
//Devuelve la respuesta
//Invoca al controller(otra funcion)  ---> nunca interactua con fuentes externas
