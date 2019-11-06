'use strict';

var _ = require('lodash');

var controllerHelper = require('../helpers/controller.helper');
var messageHelper = require('../helpers/message.helper');
//var gamesystemService = require('../services/gamesystem.service');

const { Medico } = require('../models'); // Sequelize
const { Medicos } = require('../models'); // Sequelize

const Sequelize = require('sequelize');

////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////////////////////////////

// Module Name
const MODULE_NAME = '[Medico Controller]';

// Error Messages
const GS_CT_ERR_GAMESYSTEM_NOT_FOUND = 'Medico not found';

// Success Messages
const GS_CT_DELETED_SUCCESSFULLY = 'Medico deleted successfully';

////////////////////////////////////////////////////////////////////////////////
// PUBLIC METHODS
////////////////////////////////////////////////////////////////////////////////

// https://khalilstemmler.com/articles/fixing-sequelize-models-with-migrations/
// https://sequelize.org/master/manual/migrations.html

function getMedicos(req, res) {
    try {
        Medico.findAll({

        })
            .then((consoles) => {
                //console.log(consoles);
                res.status(200).send(consoles);
                //utils.writeJson(res, consoles);
            }, (error) => {
                console.log("error : " + error);
                res.status(500).send(error);
            });

    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, getMedicos.name, error, res);
    }



}


function getMedicosById(req, res) {

    try {
        // Receiving parameters
        //var params = {
        //    id: req.swagger.params.id.value
        //};

        // Call to service
        //var result = gamesystemService.getGameSystemById(params.id);

        const id = req.swagger.params.id.value;

        Medico.findByPk(id).then(medico => res.status(200).send(medico));

        /*// Returning the result
        if (!_.isUndefined(result)) {
            res.json(result);
        } else {
            res.status(404).json(messageHelper.buildMessage(GS_CT_ERR_GAMESYSTEM_NOT_FOUND))
        }*/
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, getMedicosById.name, error, res);
    }
}

function createMedicos(req, res) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    try {

        //console.log("params : " + req);
        var med = req.body;
        //console.log("gamesystems ... " + mygamesystem);

        return Medico
            .create({
                nombre: med.nombre,
                apellido_p: med.apellido_p,
                apellido_m: med.apellido_m,
                unidad_medica: med.unidad_medica
            }, {
                /*  include: [{
                    model: order_detail,
                    as: 'orderdetail'
                  }] */
            })
            .then((medico) => {
                res.status(201).send(medico);
            })
            .catch((error) => res.status(400).send(error));


    } catch (error) {
        console.log("Was an error");
        controllerHelper.handleErrorResponse(MODULE_NAME, createMedicos().name, error, res);
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

function updateMedicos(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type'); // If needed
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    try {

        const id = req.swagger.params.id.value;
        const parameters = req.body;

        Medico.findByPk(id).then(medico => {
            if (!medico) {
                res.status(401).send(({}));
            }
            return medico.update({
                nombre: parameters.nombre,
                apellido_p: parameters.apellido_p,
                apellido_m: parameters.apellido_m,
                unidad_medica: parameters.unidad_medica
            }).then(() => res.status(200).send(medico))
                .catch(error => res.status(403).send(medico));
        }).catch(error => console.log("There was an error: " + error));
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, updateMedicos().name, error, res);
    }
}




function deleteMedicos(req, res) {
    try {
        const id = req.swagger.params.id.value;

        Medico.findByPk(id).then(medico => {
            if (!medico) {
                res.status(200).send({"success": 0, "description": "not found !"});
            } else {
                return medico.destroy()
                    .then(() => res.status(200).send({"success": 1, "description": "deleted!"}))
                    .catch(() => res.status(403).send({"success": 0, "description": "error !"}));
            }
        }).catch(error => console.log("There was an error: " + error));
    } catch (error) {
        controllerHelper.handleErrorResponse(MODULE_NAME, deleteMedicos().name, error, res);
    }

}

module.exports = {
    getMedicos,
    createMedicos,
    updateMedicos,
    deleteMedicos,
    getMedicosById,
    GS_CT_ERR_GAMESYSTEM_NOT_FOUND,
    GS_CT_DELETED_SUCCESSFULLY,
    MODULE_NAME
}
