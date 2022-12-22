const searchDB = require('../database/search');

const createNewSearch = (searchCriteria) => {
    searchDB.createNewSearch(searchCriteria);
}

const getAllSearches = (req, res) => {
    return searchDB.getAllSearches();
}

const getSearchById = (searchId) => {
    return searchDB.getSearchById(searchId);
}

const deleteSearchById = (searchId) => {
    searchDB.deleteSearchById(searchId);
}

module.exports = {
    createNewSearch,
    getAllSearches,
    getSearchById,
    deleteSearchById,
}