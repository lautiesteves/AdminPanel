const searchService = require ('../services/SearchService');

const createNewSearch = (searchCriteria) => {
    searchService.createNewSearch(searchCriteria);
}

const getAllSearches = (req, res) => {
    return searchService.getAllSearches();
}

const getSearchById = (searchId) => {
    return searchService.getSearchById(searchId);
}

const deleteSearchById = (searchId) => {
    searchService.deleteSearchById(searchId);
}

module.exports = {
    createNewSearch,
    getAllSearches,
    getSearchById,
    deleteSearchById,
}