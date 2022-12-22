const mongoose = require('mongoose');
const database = require('../database/database');
const Query = require('../models/QueryModel');

const createQuery = (req, res) => {
    const newQuery = new Query(req);
    database.newQuery(newQuery);
}

const getAllQueries = (req, res) => {
    return database.getAllQueries();
}

const getQueryById = (queryId) => {
    return database.getQueryById(queryId);
}

const deleteQueryById = (queryId) => {
    database.deleteQueryById(queryId);
}

module.exports = {
    createQuery,
    deleteQueryById,
    getAllQueries,
    getQueryById,
}