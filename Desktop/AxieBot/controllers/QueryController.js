const queryService = require('../services/QueryService');

const createQuery = (query) => {
    queryService.createQuery(query);
}

const parseQuery = (searchCriteria) => {
    const parsedQuery = queryService.searchToQuery(searchCriteria);
    return parsedQuery;
}

const postQuery = async (query) => { 
    const response = await queryService.postQuery(query.variables);
    if(response.data.data.axies.results.length > 0) {
        queryService.checkResponse(query.maxPrice, response.data.data.axies);
    };
}

const getAllQueries = () => {
    return queryService.getAllQueries();
}

const getQueryById = (queryId) => {
    return queryService.getQueryById(queryId);
}

const deleteQueryById = (queryId) => {
    queryService.deleteQueryById(queryId);
}

module.exports = {
    createQuery,
    parseQuery,
    postQuery,
    getAllQueries,
    getQueryById,
    deleteQueryById,
}