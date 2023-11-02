const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const EscuelaModel = require("./models/EscuelaModel");
const UserModel = require("./models/UserModel");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
);

// DEFINICION DE MODELOS A USAR
UserModel(sequelize);
EscuelaModel(sequelize);

// RELACIONES ENTRE MODELOS
const { User, Escuela } = sequelize.models;

//Un usuario puede tener muchas compras
User.hasMany(Escuela);
//
Escuela.belongsTo(User);

module.exports = {
    ...sequelize.models,
  conn: sequelize,
}; //conection
