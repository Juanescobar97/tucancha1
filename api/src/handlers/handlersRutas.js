const { createUserDB } = require("../controllers/usersController");
const { getUserByID } = require("../controllers/usersController");
const { getAllUsers } = require("../controllers/usersController");
const { getUserByName } = require("../controllers/usersController");

const createUserHandler = (req, res) => {
  const { nombre, mail } = req.body;

  try {
    const response = createUserDB(nombre, mail);
    res
      .status(200)
      .json({ message: `El usuario: ${nombre} fue creado con éxito` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  res.status(200).send(`Usuario ${nombre} creado con email ${mail}`);
};
const getLandingHandler = (req, res) => {
  res.status(200).send("Estás en la landing page");
};
const getContactoHandler = (req, res) => {
  res.status(200).send("Estás en el apartado de contacto");
};
const getCatalogoHandler = async (req, res) => {
  const { nombre, division, prenda, img } = req.query;

  try {
    if (nombre) {
      const cataByName = await getUserByName(nombre);
      res.status(200).json(cataByName);
    } else {
      const response = await getAllUsers();
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getCataIDHandler = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "db" : "api";

  try {
    const response = await getUserByID(id, source);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const postCarritoHandler = (req, res) => {
  res.status(200).send("Estás en el carrito");
};
//       /:id => params || es otra ruta
//       query => ?name=name&precio=precio || en la misma ruta
//       body => info

module.exports = {
  getLandingHandler,
  getContactoHandler,
  getCatalogoHandler,
  getCataIDHandler,
  createUserHandler,
};
