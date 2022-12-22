const mongoose = require('mongoose');
const database = require('../database/database');
const Hit = require('../models/HitModel');

const createHit = (req, res) => {
    const newHit = new Hit(req);
    database.newHit(newHit);
}

const checkIfIdExists = (hitId) => {
    return database.checkIfIdExists(hitId);
}

module.exports = {
    createHit,
    checkIfIdExists,
}