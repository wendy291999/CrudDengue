'use strict';

var _ = require('lodash');

var controllerHelper = require('../helpers/controller.helper');
var messageHelper = require('../helpers/message.helper');
var gamesystemService = require('../services/gamesystem.service');

const { Gamesystems } = require('../models');	// Sequelize
const { Denues } = require('../models');	// Sequelize
const { Municipios } = require('../models');	// Sequelize
const { Entidades } = require('../models');	// Sequelize
const { Internets } = require('../models');	// Sequelize
const { Idhs } = require('../models');	// Sequelize
const { Censos } = require('../models');	// Sequelize
const { Financieras } = require('../models');	// Sequelize

const Sequelize = require('sequelize');

////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////////////////////////////

// Module Name
const MODULE_NAME = '[GameSystem Controller]';

// Error Messages
const GS_CT_ERR_GAMESYSTEM_NOT_FOUND = 'Gamesystem not found';

// Success Messages
const GS_CT_DELETED_SUCCESSFULLY = 'Gamesystem deleted successfully';

////////////////////////////////////////////////////////////////////////////////
// PUBLIC METHODS
////////////////////////////////////////////////////////////////////////////////

function getCensos(req, res) {
  try {
        
    var params = {
      entidad:   req.swagger.params.entidad.value,
      municipio: req.swagger.params.municipio.value
    };

    console.log("censos..." + params);
    console.log(Censos);
    Censos.findAll({
     /*include: [{
       model: orderstatus
      
     }]
 
     include: [{ all: true, nested: true }]*/
     where: {
      cve_ent : params.entidad,
      cve_mun : params.municipio
    }
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
     controllerHelper.handleErrorResponse(MODULE_NAME, getCensos.name, error, res);
   }
  
 

}

function getInternetbyMun(req, res) {
  try {
        
    var params = {
      entidad:   req.swagger.params.entidad.value,
      municipio: req.swagger.params.municipio.value
    };

    console.log("internets ent ..." + params.entidad);
    console.log("internets mun ..." + params.municipio);

    console.log(Internets);
    Internets.findOne({
     /*include: [{
       model: orderstatus
      
     }]
 
     include: [{ all: true, nested: true }]*/
     where: {
      cve_ent : params.entidad,
      cve_mun : params.municipio
    }
       })
    .then((consoles) => {
      console.log(consoles);
      res.status(200).send(consoles);
      //utils.writeJson(res, consoles);
    }, (error) => {
      console.log("error : " + error);
      res.status(500).send(error);
    });
 
   } catch (error) {
     controllerHelper.handleErrorResponse(MODULE_NAME, getInternetbyMun.name, error, res);
   }
 
 
}

function getIdhbyMun(req, res) {
  try {
        
    var params = {
      entidad:   req.swagger.params.entidad.value,
      municipio: req.swagger.params.municipio.value
    };

    console.log("idh ent ..." + params.entidad);
    console.log("idh mun ..." + params.municipio);

    console.log(Internets);
    Idhs.findOne({
     /*include: [{
       model: orderstatus
      
     }]
 
     include: [{ all: true, nested: true }]*/
     where: {
      cve_ent : params.entidad,
      cve_mun : params.municipio
    }
       })
    .then((consoles) => {
      console.log(consoles);
      res.status(200).send(consoles);
      //utils.writeJson(res, consoles);
    }, (error) => {
      console.log("error : " + error);
      res.status(500).send(error);
    });
 
   } catch (error) {
     controllerHelper.handleErrorResponse(MODULE_NAME, getIdhbyMun.name, error, res);
   }
 
 
}

function getGameSystems(req, res) {
  try {
        
    var params = {
      entidad:   req.swagger.params.entidad.value,
      municipio: req.swagger.params.municipio.value
    };

    console.log("gamesystems..." + params);
    console.log(Denues);
    Denues.findAll({
     /*include: [{
       model: orderstatus
      
     }]
 
     include: [{ all: true, nested: true }]*/
     where: {
      cve_ent : params.entidad,
      cve_mun : params.municipio
    }
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
     controllerHelper.handleErrorResponse(MODULE_NAME, getGameSystems.name, error, res);
   }
  
 /* try {
    // Receiving parameters
    var params = {
      name: req.swagger.params.name.value,
      sort: req.swagger.params.sort.value
    };

    // Call to service
    var result = gamesystemService.getGameSystems(params);

    // Returning the result
    res.json(result);
  } catch (error) {
    controllerHelper.handleErrorResponse(MODULE_NAME, getGameSystems.name, error, res);
  }*/

}

function getEntidades(req, res) {
  try {
        

    console.log(Entidades);
    Entidades.findAll({
          
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
     controllerHelper.handleErrorResponse(MODULE_NAME, getGameSystems.name, error, res);
   }
  
 

}


function getMunicipios(req, res) {
  try {
        
    var params = {
      entidad:   req.swagger.params.entidad.value
    };

    console.log("municipios..." + params);
    console.log(Municipios);
    Municipios.findAll(
      {
        /*include: [{
          model: Internets,
          nested: false,
          as: 'Internets',
          attributes: ['habitadas'],
        }]
       // include: [{ all: true, nested: true }]
        , */
          where: {
            cve_ent : params.entidad
          }
          //attributes: ['cve_mun', 'municipio'],
      })
    .then((consoles) => {
      console.log(consoles);
      res.status(200).send(consoles);
      //utils.writeJson(res, consoles);
    }, (error) => {
      console.log("error : " + error);
      res.status(500).send(error);
    });
 
   } catch (error) {
     controllerHelper.handleErrorResponse(MODULE_NAME, getGameSystems.name, error, res);
   }
  
 /* try {
    // Receiving parameters
    var params = {
      name: req.swagger.params.name.value,
      sort: req.swagger.params.sort.value
    };

    // Call to service
    var result = gamesystemService.getGameSystems(params);

    // Returning the result
    res.json(result);
  } catch (error) {
    controllerHelper.handleErrorResponse(MODULE_NAME, getGameSystems.name, error, res);
  }*/

}

function getOls(req, res) {
  try {
        
    var params = {
      entidad:   req.swagger.params.entidad.value
    };

    console.log("municipios..." + params);
    console.log(Municipios);
    Municipios.findAll(
      {
        include: [
          {
          model: Internets,
          nested: false,
          as: 'Internets',
          attributes: ['viviendas_acceso_internet'],
        },
        {
          model: Idhs,
          nested: false,
          as: 'Idhs',
          attributes: ['idh'],
        },
        {
          model: Financieras,
          as: 'Financieras',
          attributes: ['codigo_act', 'count']
         
        },
        {
          model: Censos,
          as: 'Censos',
          attributes: ['cve_act', 'a211a', 'a111a']
         
        }
      ],
      
    //    include: [{ all: true, nested: true }]
         
          where: {
            cve_ent : params.entidad
          },
          attributes: ['cve_mun','municipio'],
            
      })
    .then((consoles) => {
      console.log(consoles);
      res.status(200).send(consoles);
      //utils.writeJson(res, consoles);
    }, (error) => {
      console.log("error : " + error);
      res.status(500).send(error);
    });
 
   } catch (error) {
     console.log("ols-error:" + error);
     controllerHelper.handleErrorResponse(MODULE_NAME, getOls.name, error, res);
   }
  
 /* try {
    // Receiving parameters
    var params = {
      name: req.swagger.params.name.value,
      sort: req.swagger.params.sort.value
    };

    // Call to service
    var result = gamesystemService.getGameSystems(params);

    // Returning the result
    res.json(result);
  } catch (error) {
    controllerHelper.handleErrorResponse(MODULE_NAME, getGameSystems.name, error, res);
  }*/

}
function getGameSystemById(req, res) {

  try {
    // Receiving parameters
    var params = {
      id: req.swagger.params.id.value
    };

    // Call to service
    var result = gamesystemService.getGameSystemById(params.id);

    // Returning the result
    if (!_.isUndefined(result)) {
      res.json(result);
    } else {
      res.status(404).json(messageHelper.buildMessage(GS_CT_ERR_GAMESYSTEM_NOT_FOUND))
    }
  } catch (error) {
    controllerHelper.handleErrorResponse(MODULE_NAME, getGameSystemById.name, error, res);
  }
}

function createGameSystem(req, res) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  try {

    console.log("params : " + req);
    var mygamesystem = req.body;
    console.log("gamesystems ... " + mygamesystem);
 
      return Gamesystems
        .create({
          name: mygamesystem.name,
          description: mygamesystem.description,
         
        }, {
        /*  include: [{
            model: order_detail,
            as: 'orderdetail'
          }] */
        })
        .then((mygamesystem) => {
          res.status(201).send(mygamesystem);
              
        })
        .catch((error) => res.status(400).send(error));
    

  } catch (error) {
    console.log("Was an error");
    controllerHelper.handleErrorResponse(MODULE_NAME, createGameSystem.name, error, res);
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

function updateGameSystem(req, res) {

  try {
    // Receiving parameters
    var params = {
      id: req.swagger.params.id.value
    };
    _.assign(params, req.body);

    // Call to service
    var result = gamesystemService.updateGameSystem(params);

    // Returning the result
    if (!_.isUndefined(result) && _.isUndefined(result.error)) {
      res.json(result);
    } else {
      res.status(409).json(messageHelper.buildMessage(result.error));
    }
  } catch (error) {
    controllerHelper.handleErrorResponse(MODULE_NAME, updateGameSystem.name, error, res);
  }
}

function deleteGameSystem(req, res) {

  try {
    // Receiving parameters
    var params = {
      id: req.swagger.params.id.value
    };

    // Call to service
    var result = gamesystemService.deleteGameSystem(params.id);

    // Returning the result
    if (!_.isUndefined(result) && _.isUndefined(result.error)) {
      res.json(messageHelper.buildMessage(GS_CT_DELETED_SUCCESSFULLY));
    } else {
      res.status(404).json(messageHelper.buildMessage(result.error));
    }
  } catch (error) {
    controllerHelper.handleErrorResponse(MODULE_NAME, createGameSystem.name, error, res);
  }
}

module.exports = {
  getGameSystems,
  getMunicipios,
  getEntidades,
  getInternetbyMun,
  getIdhbyMun,
  getCensos,
  getOls,
  getGameSystemById,
  createGameSystem,
  updateGameSystem,
  deleteGameSystem,
  GS_CT_ERR_GAMESYSTEM_NOT_FOUND,
  GS_CT_DELETED_SUCCESSFULLY,
  MODULE_NAME
}