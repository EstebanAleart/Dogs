const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height_min: {
      type: DataTypes.INTEGER,
    },
    height_max: {
      type: DataTypes.INTEGER,
    },
    weight_min: {
      type: DataTypes.INTEGER,
    },
    weight_max: {
      type: DataTypes.INTEGER,
    },
    life_span: {
      type: DataTypes.STRING,
    },
    temperamentList: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  }, {
    timestamps: false,
  
  });
};
