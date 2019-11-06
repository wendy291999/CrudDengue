'use strict';
module.exports = (sequelize, DataTypes) => {
  const Medico = sequelize.define('Medico', {
    nombre: DataTypes.STRING,
    apellido_p: DataTypes.STRING,
    apellido_m: DataTypes.STRING,
    unidad_medica: DataTypes.INTEGER
  }, {});
  Medico.associate = function(models) {
    // associations can be defined here
  };
  return Medico;
};