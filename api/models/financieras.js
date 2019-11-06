'use strict';
module.exports = (sequelize, DataTypes) => {
  const Financieras = sequelize.define('Financieras', {
  
  /*  cve_mun   :  DataTypes.STRING,
    cve_ent   :  DataTypes.STRING,
*/
/*
cve_ent  : { type: DataTypes.STRING, primaryKey : true },
    
  cve_mun  : { type: DataTypes.STRING, primaryKey : true },
*/
/*
cve_ent  : { type: DataTypes.STRING, unique: 'composite_unique' },

cve_mun  : { type: DataTypes.STRING, unique: 'composite_unique' },
*/


cve_mun  :  DataTypes.STRING,
cve_ent  :  DataTypes.STRING,

    codigo_act: DataTypes.STRING,
    count : DataTypes.NUMERIC
  }, {});
  Financieras.associate = function(models) {
    // associations can be defined here
    
    Financieras.belongsTo(models.Municipios, {
      foreignKey: 'cve_mun',
      sourceKey: 'cve_mun',
     scope: {
        cve_ent : sequelize.where(sequelize.col('Financieras.cve_ent'), '=', 
        sequelize.col('Municipios.cve_ent')),
      }
      
    });

   
     };
  return Financieras;
};