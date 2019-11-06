'use strict';

var _ = require('lodash');
var shortid = require('shortid');

////////////////////////////////////////////////////////////////////////////////
// PROPERTIES
////////////////////////////////////////////////////////////////////////////////

// Defines an initial set of gamesystems
var medicos = [];

////////////////////////////////////////////////////////////////////////////////
// PUBLIC FUNCTIONS
////////////////////////////////////////////////////////////////////////////////

function getMedicos (params) {

    var gamesystemsResult = medicos.slice();

    // Filter by name
    if (params.name !== undefined) {
        gamesystemsResult = _.filter(medicos, { name: params.name });
    }

    // Order by name
    if (params.sort !== undefined) {
        if (params.sort === 'name') {
            gamesystemsResult = _.orderBy(gamesystemsResult, ['name'], ['asc']);
        } else if (params.sort === '-name') {
            gamesystemsResult = _.orderBy(gamesystemsResult, ['name'], ['desc']);
        }
    }

    return gamesystemsResult;
}

function getMedicosById(id) {
    return medicos.find(element => {
        return element.id === id;
    });
}

function getMedicosByName(name) {
    return medicos.find(element => {
        return element.name === name;
    });
}

function createMedicos(gameSystemP) {

    var newMedicos= {
        id: shortid.generate(),
        nombre: gameSystemP.nombre,
        apellido_p: gameSystemP.apellido_p,
        apellido_m: gameSystemP.apellido_m,
        unidad_medica: gameSystemP.unidad_medica
    };

    medicos.push(newMedicos);

    return getMedicosById()(newMedicos.id);
}

function updateMedicos(gameSystemP) {

    var idToSearch = gameSystemP.id;

    var gameSystemToUpdate = getMedicosById(idToSearch);

    if (gameSystemToUpdate !== undefined) {
        gameSystemToUpdate.nombre = gameSystemP.nombre;
        gameSystemToUpdate.apellido_p = gameSystemP.apellido_m;
        gameSystemToUpdate.unidad_medica = gameSystemP.unidad_medica;
    }

    return gameSystemToUpdate;
}

function deleteMedicos(id) {

    var idToSearch = id;

    var gameSystemToDelete = getMedicosById(idToSearch);

    if (gameSystemToDelete !== undefined) {
        _.remove(medicos, function (element) {
            return element.id === gameSystemToDelete.id;
        });
        return true;
    } else {
        return false;
    }
}

function initDefaultGameSystems(gamesystemsSet) {

    medicos= gamesystemsSet.slice();
}

module.exports = {
    getMedicos,
    getMedicosById,
    getMedicosByName,
    createMedicos,
    updateMedicos,
    deleteMedicos,
    initDefaultGameSystems
}
