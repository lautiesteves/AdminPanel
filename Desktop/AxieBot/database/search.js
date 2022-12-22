const mongoose = require('mongoose');
const database = require('../database/database');
const Search = require('../models/SearchModel');

const createNewSearch = (searchCriteria) => {
    const newSearch = new Search(searchCriteria);
    database.createNewSearch(newSearch);
}

const getAllSearches = (req, res) => {
    return database.getAllSearches();
}

const getSearchById = (searchId) => {
    return database.getSearchById(searchId);
}

const deleteSearchById = (searchId) => {
    database.deleteSearchById(searchId);
}

module.exports = {
    createNewSearch,
    getAllSearches,
    getSearchById,
    deleteSearchById,
}