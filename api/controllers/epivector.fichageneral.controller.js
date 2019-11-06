'use strict';

var _ = require('lodash');

var controllerHelper = require('../helpers/controller.helper');
var messageHelper = require('../helpers/message.helper');
var gamesystemService = require('../services/gamesystem.service');
const { FichaGeneral } = require('../models');	// Sequelize
const { fichageneral} = require('../models'); // Sequelize


const Sequelize = require('sequelize');

////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////////////////////////////

// Module Name
const MODULE_NAME = '[FichaGeneral Controller]';

// Error Messages
const GS_CT_ERR_GAMESYSTEM_NOT_FOUND = 'FichaGeneral not found';

// Success Messages
const GS_CT_DELETED_SUCCESSFULLY = 'FichaGeneral deleted successfully';

////////////////////////////////////////////////////////////////////////////////
// PUBLIC METHODS
////////////////////////////////////////////////////////////////////////////////

// https://khalilstemmler.com/articles/fixing-sequelize-models-with-migrations/
// https://sequelize.org/master/manual/migrations.html

function getFichaGeneral(req, res) {
    try {
        console.log(FichaGeneral)
        FichaGeneral.findAll({})
            .then((umf) => {
                //console.log(consoles);
                res.status(200).send(fichageneral);
                //utils.writeJson(res, consoles);
            }, (error) => {
                console.log("error : " + error);
                res.status(500).send(error);
            });
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, getFichaGeneral().name, error, res);
    }
}


function getFichaGeneralId(req, res) {

    try {
        const id = req.swagger.params.id.value;

        Umf.findByPk(id)
            .then(umf => res.status(200).send(fichageneral));
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, getFichaGeneralId().name, error, res);
    }
}

function createFichaGeneral(req, res) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    try {

        //console.log("params : " + req);
        var med = req.body;
        //console.log("gamesystems ... " + mygamesystem);

        return  FichaGeneral
            .create({
                folio: med.folio,
                consultorio: med.consultorio,
                turno: med.turno,
                nss: med.nss,
                agregado: med.agregado,
                apellido_p: med.apellido_p,
                apellido_m: med.apellido_m,
                nombres: med.nombres,
                fecha_de_macimiento: med.fecha_de_macimiento,
                numeroExterior: med.numeroExterior,
                numeroInterior: med.numeroInterior,
                calle: med.calle,
                Entrecalle: med.Entrecalle,
                Ycalle: med.Ycalle,
                localidad: med.localidad,
                municipio: med.municipio,
                estado: med.estado,
                codigoPostal: med.codigoPostal,
                edad: med.edad,
                peso: med.peso,
                estatura: med.estatura



            }, {
                /*  include: [{
                    model: order_detail,
                    as: 'orderdetail'
                  }] */
            })
            .then((fichageneral) => {
                res.status(201).send(umf);
            })
            .catch((error) => res.status(400).send(error));


    } catch (error) {
        console.log("Was an error");
        controllerHelper.handleErrorResponse(MODULE_NAME, createFichaGeneral().name, error, res);
    }
    /* try {
       // Receiving parameters
       var params = req.body;

       // Call to service
       var result = gamesystemService.createGameSystem(params);

       // Returning the result
       if (!_.isUndefined(result) && _.isUndefined(result.error)) {
         res.status(201).json(result);
       } else {
         res.status(409).json(messageHelper.buildMessage(result.error));
       }
     } catch (error) {
       controllerHelper.handleErrorResponse(MODULE_NAME, createGameSystem.name, error, res);
     } */


}

function updateFichaGeneral(req, res) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type'); // If needed
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    try {

        const id = req.swagger.params.id.value;
        const parameters = req.body;

        FichaGeneral.findByPk(id).then(umf => {
            if (!fichageneral) {
                res.status(401).send(({}));
            }
            return fichageneral.update({
                folio: parameters.folio,
                consultorio: parameters.consultorio,
                turno: parameters.turno,
                nss: parameters.nss,
                agregado: parameters.agregado,
                apellido_p: parameters.apellido_p,
                apellido_m: parameters.apellido_m,
                nombres: parameters.nombres,
                fecha_de_macimiento: parameters.fecha_de_macimiento,
                numeroExterior: parameters.numeroExterior,
                numeroInterior: parameters.numeroInterior,
                calle: parameters.calle,
                Entrecalle: parameters.Entrecalle,
                Ycalle: parameters.Ycalle,
                localidad: parameters.localidad,
                municipio: parameters.municipio,
                estado: parameters.estado,
                codigoPostal: parameters.codigoPostal,
                edad: parameters.edad,
                peso: parameters.peso,
                estatura: parameters.estatura



            }).then(() => res.status(200).send(fichageneral))
                .catch(error => res.status(403).send(fichageneral));
        }).catch(error => console.log("There was an error: " + error));
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, updateFichaGeneral().name, error, res);
    }
}

function deleteFichaGeneral(req, res) {

    try {
        const id = req.swagger.params.id.value;

        Umf.findByPk(id).then(fichageneral => {
            if (!fichageneral) {
                res.status(200).send({"success": 0, "description": "not found !"});
            } else {
                return fichageneral.destroy()
                    .then(() => res.status(200).send({"success": 1, "description": "deleted!"}))
                    .catch(() => res.status(403).send({"success": 0, "description": "error !"}));
            }
        }).catch(error => console.log("There was an error: " + error));
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, deleteFichaGeneral().name, error, res);
    }

}

module.exports = {
    getFichaGeneral,
    getFichaGeneralId,
    createFichaGeneral,
    updateFichaGeneral,
    deleteFichaGeneral,
    GS_CT_ERR_GAMESYSTEM_NOT_FOUND,
    GS_CT_DELETED_SUCCESSFULLY,
    MODULE_NAME
}
