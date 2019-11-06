'use strict';
module.exports = (sequelize, DataTypes) => {
  const Municipios = sequelize.define('Municipios', {
    cve_ent: { 
              type: DataTypes.STRING,         
              primaryKey: true
    },
    cve_mun: { 
      type: DataTypes.STRING,
      primaryKey: true
    },
    
   /*
   cve_ent  : { type: DataTypes.STRING, unique: 'composite_unique' },
   cve_mun  : { type: DataTypes.STRING, unique: 'composite_unique' },
  */
    municipio: DataTypes.STRING

  }, {});
  Municipios.associate = function(models) {

    // associations can be defined here
    Municipios.belongsTo(models.Internets, {
      foreignKey: 'cve_mun',
      sourceKey: 'cve_mun',
      scope: {
        cve_ent : sequelize.where(sequelize.col('Municipios.cve_ent'), '=', 
        sequelize.col('Internets.cve_ent')),
      },
      as: 'Internets',
    });

    Municipios.belongsTo(models.Idhs, {
      foreignKey: 'cve_mun',
      sourceKey: 'cve_mun',
      scope: {
        cve_ent : sequelize.where(sequelize.col('Municipios.cve_ent'), '=', 
        sequelize.col('Idhs.cve_ent')),
      },
      as: 'Idhs',
    });
/*
    Municipios.hasMany(models.Denues, {
      foreignKey: 'cve_mun',
      sourceKey: 'cve_mun',
      scope: {
        cve_ent : sequelize.where(sequelize.col('Municipios.cve_ent'), '=', 
        sequelize.col('Denues.cve_ent')),
      },
      as: 'Denues',
    });
*/

    Municipios.hasMany(models.Censos, {
      foreignKey: 'cve_mun',
      sourceKey: 'cve_mun',
      scope: {
        cve_ent : sequelize.where(sequelize.col('Municipios.cve_ent'), '=', 
        sequelize.col('Censos.cve_ent')),
      },
      as: 'Censos',
    });
  
Municipios.hasMany(models.Financieras, {
      foreignKey: 'cve_mun',
      sourceKey: 'cve_mun',
      scope: {
        cve_ent : sequelize.where(sequelize.col('Municipios.cve_ent'), '=', 
        sequelize.col('Financieras.cve_ent')),
      },
      as: 'Financieras',
    });
    //models.Financieras.removeAttribute('id');    

  };
  return Municipios;
};