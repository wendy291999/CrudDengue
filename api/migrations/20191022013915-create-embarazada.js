'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Embarazadas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imc: {
        type: Sequelize.DOUBLE
      },
      escolaridad: {
        type: Sequelize.STRING
      },
      semanas_de_gestacion: {
        type: Sequelize.INTEGER
      },
      gestas: {
        type: Sequelize.INTEGER
      },
      paras: {
        type: Sequelize.INTEGER
      },
      abortos: {
        type: Sequelize.INTEGER
      },
      cesareas: {
        type: Sequelize.INTEGER
      },
      f_ultima_mestruacion: {
        type: Sequelize.DATEONLY
      },
      f_probable_de_parto: {
        type: Sequelize.DATEONLY
      },
      antecedente_cirugia_uterina: {
        type: Sequelize.BOOLEAN
      },
      antecedentes_perinatales: {
        type: Sequelize.BOOLEAN
      },
      periodo_intergenesico: {
        type: Sequelize.BOOLEAN
      },
      primer_embarazo_o_mas_de_cuatro: {
        type: Sequelize.BOOLEAN
      },
      antecedentes_de_dos_o_mas_abortos_espontaneos: {
        type: Sequelize.BOOLEAN
      },
      antecedente_cesarea: {
        type: Sequelize.BOOLEAN
      },
      preeclampsia: {
        type: Sequelize.BOOLEAN
      },
      eclampsia: {
        type: Sequelize.BOOLEAN
      },
      obito_fetal: {
        type: Sequelize.BOOLEAN
      },
      bajo_peso_al_nacer: {
        type: Sequelize.BOOLEAN
      },
      prematurez: {
        type: Sequelize.BOOLEAN
      },
      macrosomia: {
        type: Sequelize.BOOLEAN
      },
      malformacion_congenita: {
        type: Sequelize.BOOLEAN
      },
      sangrado_tercer_trimestre: {
        type: Sequelize.BOOLEAN
      },
      polihidramnios: {
        type: Sequelize.BOOLEAN
      },
      embarazo_ectopico: {
        type: Sequelize.BOOLEAN
      },
      enfermedad_trofoblastica_gestacional: {
        type: Sequelize.BOOLEAN
      },
      hipertencion_arterial: {
        type: Sequelize.BOOLEAN
      },
      diabetes_mellitus: {
        type: Sequelize.BOOLEAN
      },
      cardiopatia_congenita_o_adquirida: {
        type: Sequelize.BOOLEAN
      },
      tiroidopatias: {
        type: Sequelize.BOOLEAN
      },
      enfermedades_autoinmunes_o_de_la_colagena: {
        type: Sequelize.BOOLEAN
      },
      enfermedad_tromboembolica: {
        type: Sequelize.BOOLEAN
      },
      accidente_vascular_cerebral: {
        type: Sequelize.BOOLEAN
      },
      neumopatias: {
        type: Sequelize.BOOLEAN
      },
      tuberculosis: {
        type: Sequelize.BOOLEAN
      },
      hepatopatias: {
        type: Sequelize.BOOLEAN
      },
      cancer_de_mama: {
        type: Sequelize.BOOLEAN
      },
      cancer_cervico_uterino: {
        type: Sequelize.BOOLEAN
      },
      cancer_otros_organos: {
        type: Sequelize.BOOLEAN
      },
      nefropatias: {
        type: Sequelize.BOOLEAN
      },
      epilepsia: {
        type: Sequelize.BOOLEAN
      },
      neuropatia_cronica: {
        type: Sequelize.BOOLEAN
      },
      hematologicas: {
        type: Sequelize.BOOLEAN
      },
      enfermedad_isquemica_miocardica: {
        type: Sequelize.BOOLEAN
      },
      discapacidad_fisica_mental: {
        type: Sequelize.BOOLEAN
      },
      seropositivo_vih_sida: {
        type: Sequelize.BOOLEAN
      },
      alcoholismo: {
        type: Sequelize.BOOLEAN
      },
      tabaquismo: {
        type: Sequelize.BOOLEAN
      },
      drogadiccion: {
        type: Sequelize.BOOLEAN
      },
      adicciones: {
        type: Sequelize.BOOLEAN
      },
      f_primera_atencion: {
        type: Sequelize.DATEONLY
      },
      f_envio_a_trabajo_social: {
        type: Sequelize.DATEONLY
      },
      f_ultima_cita: {
        type: Sequelize.DATEONLY
      },
      f_proxima_cita: {
        type: Sequelize.DATEONLY
      },
      f_envio_a_cph: {
        type: Sequelize.DATEONLY
      },
      f_envio_a_ginecologia: {
        type: Sequelize.DATEONLY
      },
      f_envio_de_resolucion_embarazo: {
        type: Sequelize.DATEONLY
      },
      f_envio_de_entrega_pulsera_rosa: {
        type: Sequelize.DATEONLY
      },
      f_envio_vacula_de_influenza: {
        type: Sequelize.DATEONLY
      },
      f_envio_vacula_de_tdpa: {
        type: Sequelize.DATEONLY
      },
      f_envio_primera_prueba_vih: {
        type: Sequelize.DATEONLY
      },
      f_envio_segunda_prueba_vih: {
        type: Sequelize.DATEONLY
      },
      fue_reactiva_alguna_prueba_vih: {
        type: Sequelize.BOOLEAN
      },
      ivu: {
        type: Sequelize.STRING
      },
      ir: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Embarazadas');
  }
};