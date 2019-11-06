'use strict';
module.exports = (sequelize, DataTypes) => {
  const Entidades = sequelize.define('Entidades', {
    cve_ent: DataTypes.STRING,
    entidad: DataTypes.STRING,
   
  }, {});
  Entidades.associate = function(models) {
    // associations can be defined here
  };
  return Entidades;
};