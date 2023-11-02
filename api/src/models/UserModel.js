const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mail: {
        type: DataTypes.STRING
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      }
    },
    { timestamps: false } //agrega la fecha en la que se agrega
  );
};
