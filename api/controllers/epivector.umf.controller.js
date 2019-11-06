'use strict';

var _ = require('lodash');

var controllerHelper = require('../helpers/controller.helper');
var messageHelper = require('../helpers/message.helper');
var gamesystemService = require('../services/gamesystem.service');
const { Umf } = require('../models');	// Sequelize
const { umf } = require('../models'); // Sequelize


const Sequelize = require('sequelize');

////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////////////////////////////

// Module Name
const MODULE_NAME = '[Umf Controller]';

// Error Messages
const GS_CT_ERR_GAMESYSTEM_NOT_FOUND = 'Umf not found';

// Success Messages
const GS_CT_DELETED_SUCCESSFULLY = 'Umf deleted successfully';

////////////////////////////////////////////////////////////////////////////////
// PUBLIC METHODS
////////////////////////////////////////////////////////////////////////////////

// https://khalilstemmler.com/articles/fixing-sequelize-models-with-migrations/
// https://sequelize.org/master/manual/migrations.html

function getUmf(req, res) {
    try {
        console.log(Umf);
        Umf.findAll({})
            .then((umf) => {
                //console.log(consoles);
                res.status(200).send(umf);
                //utils.writeJson(res, consoles);
            }, (error) => {
                console.log("error : " + error);
                res.status(500).send(error);
            });
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, getUmf().name, error, res);
    }
}


function getUmfId(req, res) {

    try {
        const id = req.swagger.params.id.value;

        Umf.findByPk(id)
            .then(umf => res.status(200).send(umf));
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, getUmfId().name, error, res);
    }
}

function createUmf(req, res) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    try {

        //console.log("params : " + req);
        var med = req.body;
        //console.log("gamesystems ... " + mygamesystem);

        return  Umf
            .create({
                instalacion: med.instalacion,
                tipo_de_instalacion: med.tipo_de_instalacion,
                tipo_de_unidad: med.tipo_de_unidad,
                direccion: med.direccion,
                entre_calles: med.entre_calles,
                telefono: med.telefono,
                horario_de_atencion: med.horario_de_atencion
            }, {
                /*  include: [{
                    model: order_detail,
                    as: 'orderdetail'
                  }] */
            })
            .then((umf) => {
                res.status(201).send(umf);
            })
            .catch((error) => res.status(400).send(error));


    } catch (error) {
        console.log("Was an error");
        controllerHelper.handleErrorResponse(MODULE_NAME, createUmf().name, error, res);
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

function updateUmf(req, res) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type'); // If needed
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    try {

        const id = req.swagger.params.id.value;
        const parameters = req.body;

        Umf.findByPk(id).then(umf => {
            if (!medico) {
                res.status(401).send(({}));
            }
            return medico.update({
                instalacion: parameters.instalacion,
                tipo_de_instalacion: parameters.tipo_de_instalacion,
                tipo_de_unidad: parameters.tipo_de_unidad,
                direccion: parameters.direccion,
                entre_calles: parameters.entre_calles,
                telefono: parameters.telefono,
                horario_de_atencion: parameters.horario_de_atencion
            }).then(() => res.status(200).send(umf))
                .catch(error => res.status(403).send(umf));
        }).catch(error => console.log("There was an error: " + error));
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, updateUmf().name, error, res);
    }
}

function deleteUmf(req, res) {

    try {
        const id = req.swagger.params.id.value;

        Umf.findByPk(id).then(umf => {
            if (!umf) {
                res.status(200).send({"success": 0, "description": "not found !"});
            } else {
                return umf.destroy()
                    .then(() => res.status(200).send({"success": 1, "description": "deleted!"}))
                    .catch(() => res.status(403).send({"success": 0, "description": "error !"}));
            }
        }).catch(error => console.log("There was an error: " + error));
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, deleteUmf().name, error, res);
    }

}

module.exports = {
    getUmf,
    getUmfId,
    createUmf,
    updateUmf,
    deleteUmf,
    GS_CT_ERR_GAMESYSTEM_NOT_FOUND,
    GS_CT_DELETED_SUCCESSFULLY,
    MODULE_NAME
}
