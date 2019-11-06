'use strict';
module.exports = (sequelize, DataTypes) => {
  const Idhs = sequelize.define('Idhs', {
    cve_mun  : { type: DataTypes.STRING, primaryKey : true },
    cve_ent  : { type: DataTypes.STRING, primaryKey : true },

    entidad : DataTypes.STRING,
    municipio : DataTypes.STRING,
    promedio_escolaridad : DataTypes.STRING,
    escolaridad_esperada : DataTypes.STRING,
    ipc_usd : DataTypes.STRING,
    mortalidad_infantil : DataTypes.STRING,
    indice_educacion : DataTypes.STRING,
    indice_ingreso : DataTypes.STRING,
    indice_salud : DataTypes.STRING,
    idh  : DataTypes.DECIMAL
   
  }, {});
  Idhs.associate = function(models) {
    // associations can be defined here
  };
  return Idhs;
};