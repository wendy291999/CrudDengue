'use strict';

////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////////////////////////////

const controllerHelper = require('../helpers/controller.helper');
const {Embarazada} = require('../models');

// Module Name
const MODULE_NAME = '[Embarazadas Controller]';

// Error Messages
const GS_CT_ERR_EMBARAZADA_NOT_FOUND = 'Embarazada not found';

// Success Messages
const GS_CT_DELETED_SUCCESSFULLY = 'Embarazada deleted successfully';

////////////////////////////////////////////////////////////////////////////////
// PUBLIC METHODS
////////////////////////////////////////////////////////////////////////////////

// https://khalilstemmler.com/articles/fixing-sequelize-models-with-migrations/
// https://sequelize.org/master/manual/migrations.html

function getEmbarazadas(req, res) {
    try {
        console.log(Embarazada);
        Embarazada.findAll({})
            .then((embarazadas) => {
                //console.log(consoles);
                res.status(200).send(embarazadas);
                //utils.writeJson(res, consoles);
            }, (error) => {
                console.log("error : " + error);
                res.status(500).send(error);
            });
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, getEmbarazadas.name, error, res);
    }
}


function getEmbarazadaById(req, res) {
    try {
        const id = req.swagger.params.id.value;

        Embarazada.findByPk(id)
            .then(embarazada => res.status(200).send(embarazada));
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, getEmbarazadaById.name, error, res);
    }
}

function createEmbarazada(req, res) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    try {
        console.log("params : " + req);
        const parameters = req.body;
        console.log("embarazadas ... " + parameters);

        return Embarazada.create({
                imc: parameters.imc,
                escolaridad: parameters.escolaridad,
                semanas_de_gestacion: parameters.semanas_de_gestacion,
                gestas: parameters.gestas,
                paras: parameters.paras,
                abortos: parameters.abortos,
                cesareas: parameters.cesareas,
                f_ultima_mestruacion: parameters.f_ultima_mestruacion,
                f_probable_de_parto: parameters.f_probable_de_parto,
                antecedente_cirugia_uterina: parameters.antecedente_cirugia_uterina,
                antecedentes_perinatales: parameters.antecedentes_perinatales,
                periodo_intergenesico: parameters.periodo_intergenesico,
                primer_embarazo_o_mas_de_cuatro: parameters.primer_embarazo_o_mas_de_cuatro,
                antecedentes_de_dos_o_mas_abortos_espontaneos: parameters.antecedentes_de_dos_o_mas_abortos_espontaneos,
                antecedente_cesarea: parameters.antecedente_cesarea,
                preeclampsia: parameters.preeclampsia,
                eclampsia: parameters.eclampsia,
                obito_fetal: parameters.obito_fetal,
                bajo_peso_al_nacer: parameters.bajo_peso_al_nacer,
                prematurez: parameters.prematurez,
                macrosomia: parameters.macrosomia,
                malformacion_congenita: parameters.malformacion_congenita,
                sangrado_tercer_trimestre: parameters.sangrado_tercer_trimestre,
                polihidramnios: parameters.polihidramnios,
                embarazo_ectopico: parameters.embarazo_ectopico,
                enfermedad_trofoblastica_gestacional: parameters.enfermedad_trofoblastica_gestacional,
                hipertencion_arterial: parameters.hipertencion_arterial,
                diabetes_mellitus: parameters.diabetes_mellitus,
                cardiopatia_congenita_o_adquirida: parameters.cardiopatia_congenita_o_adquirida,
                tiroidopatias: parameters.tiroidopatias,
                enfermedades_autoinmunes_o_de_la_colagena: parameters.enfermedades_autoinmunes_o_de_la_colagena,
                enfermedad_tromboembolica: parameters.enfermedad_tromboembolica,
                accidente_vascular_cerebral: parameters.accidente_vascular_cerebral,
                neumopatias: parameters.neumopatias,
                tuberculosis: parameters.tuberculosis,
                hepatopatias: parameters.hepatopatias,
                cancer_de_mama: parameters.cancer_de_mama,
                cancer_cervico_uterino: parameters.cancer_cervico_uterino,
                cancer_otros_organos: parameters.cancer_otros_organos,
                nefropatias: parameters.nefropatias,
                epilepsia: parameters.epilepsia,
                neuropatia_cronica: parameters.neuropatia_cronica,
                hematologicas: parameters.hematologicas,
                enfermedad_isquemica_miocardica: parameters.enfermedad_isquemica_miocardica,
                discapacidad_fisica_mental: parameters.discapacidad_fisica_mental,
                seropositivo_vih_sida: parameters.seropositivo_vih_sida,
                alcoholismo: parameters.alcoholismo,
                tabaquismo: parameters.tabaquismo,
                drogadiccion: parameters.drogadiccion,
                adicciones: parameters.adicciones,
                f_primera_atencion: parameters.f_primera_atencion,
                f_envio_a_trabajo_social: parameters.f_envio_a_trabajo_social,
                f_ultima_cita: parameters.f_ultima_cita,
                f_proxima_cita: parameters.f_proxima_cita,
                f_envio_a_cph: parameters.f_envio_a_cph,
                f_envio_a_ginecologia: parameters.f_envio_a_ginecologia,
                f_envio_de_resolucion_embarazo: parameters.f_envio_de_resolucion_embarazo,
                f_envio_de_entrega_pulsera_rosa: parameters.f_envio_de_entrega_pulsera_rosa,
                f_envio_vacula_de_influenza: parameters.f_envio_vacula_de_influenza,
                f_envio_vacula_de_tdpa: parameters.f_envio_vacula_de_tdpa,
                f_envio_primera_prueba_vih: parameters.f_envio_primera_prueba_vih,
                f_envio_segunda_prueba_vih: parameters.f_envio_segunda_prueba_vih,
                fue_reactiva_alguna_prueba_vih: parameters.fue_reactiva_alguna_prueba_vih,
                ivu: parameters.ivu,
                ir: parameters.ir
            },
            {
                /*include: [{
                    model: order_detail,
                    as: 'orderdetail'
                }]*/
            }).then((embarazada) => {
            res.status(201).send(embarazada);
        }).catch((error) => res.status(400).send(error));
    } catch (error) {
        console.log("Was an error");
        controllerHelper.handleErrorResponse(MODULE_NAME, createEmbarazada.name, error, res);
    }
}

function updateEmbarazada(req, res) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type'); // If needed
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    try {
        const id = req.swagger.params.id.value;
        const parameters = req.body;

        Embarazada.findByPk(id).then(embarazada => {
            if (!embarazada) {
                res.status(401).send(({}));
            }
            return embarazada.update({
                imc: parameters.imc,
                escolaridad: parameters.escolaridad,
                semanas_de_gestacion: parameters.semanas_de_gestacion,
                gestas: parameters.gestas,
                paras: parameters.paras,
                abortos: parameters.abortos,
                cesareas: parameters.cesareas,
                f_ultima_mestruacion: parameters.f_ultima_mestruacion,
                f_probable_de_parto: parameters.f_probable_de_parto,
                antecedente_cirugia_uterina: parameters.antecedente_cirugia_uterina,
                antecedentes_perinatales: parameters.antecedentes_perinatales,
                periodo_intergenesico: parameters.periodo_intergenesico,
                primer_embarazo_o_mas_de_cuatro: parameters.primer_embarazo_o_mas_de_cuatro,
                antecedentes_de_dos_o_mas_abortos_espontaneos: parameters.antecedentes_de_dos_o_mas_abortos_espontaneos,
                antecedente_cesarea: parameters.antecedente_cesarea,
                preeclampsia: parameters.preeclampsia,
                eclampsia: parameters.eclampsia,
                obito_fetal: parameters.obito_fetal,
                bajo_peso_al_nacer: parameters.bajo_peso_al_nacer,
                prematurez: parameters.prematurez,
                macrosomia: parameters.macrosomia,
                malformacion_congenita: parameters.malformacion_congenita,
                sangrado_tercer_trimestre: parameters.sangrado_tercer_trimestre,
                polihidramnios: parameters.polihidramnios,
                embarazo_ectopico: parameters.embarazo_ectopico,
                enfermedad_trofoblastica_gestacional: parameters.enfermedad_trofoblastica_gestacional,
                hipertencion_arterial: parameters.hipertencion_arterial,
                diabetes_mellitus: parameters.diabetes_mellitus,
                cardiopatia_congenita_o_adquirida: parameters.cardiopatia_congenita_o_adquirida,
                tiroidopatias: parameters.tiroidopatias,
                enfermedades_autoinmunes_o_de_la_colagena: parameters.enfermedades_autoinmunes_o_de_la_colagena,
                enfermedad_tromboembolica: parameters.enfermedad_tromboembolica,
                accidente_vascular_cerebral: parameters.accidente_vascular_cerebral,
                neumopatias: parameters.neumopatias,
                tuberculosis: parameters.tuberculosis,
                hepatopatias: parameters.hepatopatias,
                cancer_de_mama: parameters.cancer_de_mama,
                cancer_cervico_uterino: parameters.cancer_cervico_uterino,
                cancer_otros_organos: parameters.cancer_otros_organos,
                nefropatias: parameters.nefropatias,
                epilepsia: parameters.epilepsia,
                neuropatia_cronica: parameters.neuropatia_cronica,
                hematologicas: parameters.hematologicas,
                enfermedad_isquemica_miocardica: parameters.enfermedad_isquemica_miocardica,
                discapacidad_fisica_mental: parameters.discapacidad_fisica_mental,
                seropositivo_vih_sida: parameters.seropositivo_vih_sida,
                alcoholismo: parameters.alcoholismo,
                tabaquismo: parameters.tabaquismo,
                drogadiccion: parameters.drogadiccion,
                adicciones: parameters.adicciones,
                f_primera_atencion: parameters.f_primera_atencion,
                f_envio_a_trabajo_social: parameters.f_envio_a_trabajo_social,
                f_ultima_cita: parameters.f_ultima_cita,
                f_proxima_cita: parameters.f_proxima_cita,
                f_envio_a_cph: parameters.f_envio_a_cph,
                f_envio_a_ginecologia: parameters.f_envio_a_ginecologia,
                f_envio_de_resolucion_embarazo: parameters.f_envio_de_resolucion_embarazo,
                f_envio_de_entrega_pulsera_rosa: parameters.f_envio_de_entrega_pulsera_rosa,
                f_envio_vacula_de_influenza: parameters.f_envio_vacula_de_influenza,
                f_envio_vacula_de_tdpa: parameters.f_envio_vacula_de_tdpa,
                f_envio_primera_prueba_vih: parameters.f_envio_primera_prueba_vih,
                f_envio_segunda_prueba_vih: parameters.f_envio_segunda_prueba_vih,
                fue_reactiva_alguna_prueba_vih: parameters.fue_reactiva_alguna_prueba_vih,
                ivu: parameters.ivu,
                ir: parameters.ir
            }).then(() => res.status(200).send(embarazada))
                .catch(error => res.status(403).send(embarazada));
        }).catch(error => console.log("There was an error: " + error));
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, updateEmbarazada.name, error, res);
    }
}

function deleteEmbarazada(req, res) {
    try {
        const id = req.swagger.params.id.value;

        Embarazada.findByPk(id).then(embarazada => {
            if (!embarazada) {
                res.status(200).send({"success": 0, "description": "not found !"});
            } else {
                return embarazada.destroy()
                    .then(() => res.status(200).send({"success": 1, "description": "deleted!"}))
                    .catch(() => res.status(403).send({"success": 0, "description": "error !"}));
            }
        }).catch(error => console.log("There was an error: " + error));
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, deleteEmbarazada.name, error, res);
    }
}

module.exports = {
    getEmbarazadas,
    getEmbarazadaById,
    createEmbarazada,
    updateEmbarazada,
    deleteEmbarazada,
    GS_CT_ERR_EMBARAZADA_NOT_FOUND,
    GS_CT_DELETED_SUCCESSFULLY,
    MODULE_NAME
};
