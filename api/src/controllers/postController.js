const { Escuela } = require("../db");

const createPostDb = async (nombre, prenda, precio, userId) => {
  const post = await Escuela.create({ nombre, prenda, precio });

  if(userId){
      await post.setEscuelas(userId);
  }

  return post;
};

module.exports = { createPostDb };
