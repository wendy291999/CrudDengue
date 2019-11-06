'use strict';
module.exports = (sequelize, DataTypes) => {
  const Censos = sequelize.define('Censos', {
    cve_mun :  DataTypes.STRING,
    cve_ent :  DataTypes.STRING,
  
    entidad : DataTypes.STRING,
    municipio: DataTypes.STRING,

    actividad_economica: DataTypes.STRING,
    ue : DataTypes.STRING,
    h001a : DataTypes.STRING,
    h010a :  DataTypes.STRING,
    a111a :  DataTypes.STRING,
    a211a :  DataTypes.STRING,
    m091a :  DataTypes.STRING,
    h010d :  DataTypes.STRING,
    h020a :  DataTypes.STRING,
    i000a :  DataTypes.STRING,
    i100a :  DataTypes.STRING,
    i200a :  DataTypes.STRING,
    k000a :  DataTypes.STRING,
    k020a :  DataTypes.STRING,
    k311a :  DataTypes.STRING,
    k040a :  DataTypes.STRING,
    k041a :  DataTypes.STRING,
    k050a :  DataTypes.STRING,
    k620a :  DataTypes.STRING,
    k060a :  DataTypes.STRING,
    k810a :  DataTypes.STRING,
    k090a :  DataTypes.STRING,
    a700a :  DataTypes.STRING,
    m000a :  DataTypes.STRING,
    m020a :  DataTypes.STRING,
    m090a :  DataTypes.STRING,
    a800a :  DataTypes.STRING
   
  }, {});
  Censos.associate = function(models) {
    // associations can be defined here
    Censos.belongsTo(models.Municipios, {
      foreignKey: 'cve_mun',
      sourceKey: 'cve_mun',
      scope: {
        cve_ent : sequelize.where(sequelize.col('Censos.cve_ent'), '=', 
        sequelize.col('Municipios.cve_ent')),
      }
      
    });

  };
  return Censos;
};