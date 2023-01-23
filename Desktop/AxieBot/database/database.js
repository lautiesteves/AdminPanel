const mongoose = require('mongoose');
const Search = require('../models/SearchModel');
const Query = require('../models/QueryModel');
const Hit = require('../models/HitModel');

mongoose.connect("mongodb://localhost:27017/AxieBot?&authSource=admin", { useNewUrlParser: true });

const createNewSearch = (newSearch) => {
    newSearch.save();
}

const getAllSearches = (req, res) => {
    return (Search.find());
}

const getSearchById = (searchId) => {
    return Search.findById(searchId);
}

const deleteSearchById = (searchId) => {
    Search.findByIdAndDelete(searchId);
}

const newQuery = (req, res) => {
    req.save();
}

const getAllQueries = async (req, res) => {
    const result = await Query.find();
    return result;
}

const getQueryById = (queryId) => {
    return Query.findById(queryId);
}

const deleteQueryById = (queryId) => {
    Query.findByIdAndDelete(queryId);
}

const newHit = (req, res) => {
    req.save();
}

const checkIfIdExists = (hitId) => {
    const data = Hit.exists({_id: hitId});
    if(data === null) {
        return false;
    }
    return true;
}

module.exports = {
    createNewSearch,
    getAllSearches,
    getSearchById,
    deleteSearchById,
    newQuery,
    getAllQueries,
    getQueryById,
    deleteQueryById,
    newHit,
    checkIfIdExists,
}