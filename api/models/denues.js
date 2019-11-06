'use strict';
module.exports = (sequelize, DataTypes) => {
  const Denues = sequelize.define('Denues', {
  //  cve_mun  : { type: DataTypes.STRING, primaryKey : true },
  //  cve_ent  : { type: DataTypes.STRING, primaryKey : true },

    cve_mun  :  DataTypes.STRING,
    cve_ent  :  DataTypes.STRING,
    municipio: DataTypes.STRING,
    nom_estab: DataTypes.STRING,
    nom_vial: DataTypes.STRING,
    latitud: DataTypes.STRING,
    longitud: DataTypes.STRING
  }, {});
  Denues.associate = function(models) {
    // associations can be defined here
    Denues.belongsTo(models.Municipios, {
      foreignKey: 'cve_mun',
      sourceKey: 'cve_mun',
      scope: {
        cve_ent : sequelize.where(sequelize.col('Denues.cve_ent'), '=', 
        sequelize.col('Municipios.cve_ent')),
      }
      
    });

  };
  return Denues;
};