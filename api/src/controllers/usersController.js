const axios = require("axios");
const { User } = require("../db");
const users = [];

const createUserDB = async (nombre, mail) => {
  return await User.create({ nombre, mail });
  // const newUser = { nombre, mail, phone};
  // users.push(newUser);
  // return newUser;
  //si no ponemos el async me da undefined
};

const getUserByID = async (id, source) => {
  const user =
    source === "api"
      ? (await axios.get(`http://localhost:3000/uniformes/${id}`)).data
      : await User.findByPk(id);

  return user;
};

  const infoCleaner = (array) =>{   //funcion para filtrar y mostrar solo estos datos de la api
    return array.map((uniformes) => {
      return {
        nombre: uniformes.nombre,    
        division: uniformes.division,
        prenda: uniformes.prenda,
        img: uniformes.img,
        created:false
      };
    });
  }

  const getAllUsers = async () => {
    const usersDB = await User.findAll();

    const infoApi = (await axios.get(`http://localhost:3000/uniformes/`)).data;

    const userApi = infoCleaner(infoApi);

    return [...usersDB, ...userApi];
  };

  const getUserByName = async (nombre) => {
    const infoApi = (await axios.get(`http://localhost:3000/uniformes/`)).data;

    const userApi = infoCleaner(infoApi);

    const userFiltered = userApi.filter((uniformes) => uniformes.nombre === nombre);

    const userDb = await User.findAll({where:{nombre: nombre}})

    return [...userDb, ...userFiltered];

  }

module.exports = { createUserDB, getUserByID, getAllUsers, getUserByName };
