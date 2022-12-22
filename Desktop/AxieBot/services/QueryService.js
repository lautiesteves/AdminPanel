const mongoose = require('mongoose');
const axios = require('axios');
const queryDB = require('../database/query');
const hitService = require('./HitService');

const getAllQueries = () => {
    return queryDB.getAllQueries();
};

const getQueryById = (queryId) => {
    return queryDB.getQueryById(queryId);
};

const deleteQueryById = (queryId) => {
    queryDB.deleteQueryById(queryId);
}

const searchToQuery = (searchCriteria) => {        
    const searchName = searchCriteria.searchName;
    const maxPrice = searchCriteria.maxPrice;
    const parts = bodyPartParser(searchCriteria); 
    const query = queryParser(searchCriteria, parts, maxPrice, searchName);
    return query;
}

const createQuery = (query) => {
    queryDB.createQuery(query);
}

const bodyPartParser = (searchCriteria) => {
    let parts = [];
    eyeParser(searchCriteria.eye, parts);
    earParser(searchCriteria.ear, parts);
    backParser(searchCriteria.back, parts);
    mouthParser(searchCriteria.mouth, parts);
    hornParser(searchCriteria.horn, parts);
    tailParser(searchCriteria.tail, parts);
    return parts;
}

const queryParser = (data, parts, maxPrice, searchName) => {
    const variables = {
        operationName: "GetAxieBriefList",
        variables : {
            auctionType: "Sale",
            sort: "PriceAsc",
            criteria: {
                ...(data.classes && {classes: data.classes}),
                ...(data.breedCount && {breedCount: data.breedCount}),
                parts: parts,
            }
        },
        query: "query GetAxieBriefList($auctionType: AuctionType, $criteria: AxieSearchCriteria, $sort: SortBy) {\n  axies(auctionType: $auctionType, criteria: $criteria, sort: $sort) {\n    total\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n  id\n  class\n  breedCount\n  image\n  battleInfo {\n    banned\n    __typename\n  }\n  auction {\n    currentPrice\n    currentPriceUSD\n    __typename\n  }\n  parts {\n    id\n    name\n    class\n    type\n    specialGenes\n    __typename\n  }\n  __typename\n}\n",
    };
    const query = {
        searchName: searchName,
        maxPrice: maxPrice,
        variables: variables
    };
    return (query);
}

// const queryParser = () => {
//     return({
//         "SearchName": "Mi busqueda",
//         "maxPrice": 0.07,
//         "query": {
//             "operationName": "GetAxieBriefList",
//             "variables": {
//             "sort": "PriceAsc",
//             "auctionType": "Sale",
//             "criteria": {
//                 "classes": "Bird",
//                 "parts": ["eye-mavis", "ears-early-bird", "back-cupid", "mouth-peace-maker", "horn-eggshell", "tail-granmas-fan"],
//                 "breedCount": 2
//             }},
//             "query": "query GetAxieBriefList($auctionType: AuctionType, $criteria: AxieSearchCriteria, $sort: SortBy) {\n  axies(auctionType: $auctionType, criteria: $criteria, sort: $sort) {\n    total\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n  id\n  class\n  breedCount\n  image\n  battleInfo {\n    banned\n    __typename\n  }\n  auction {\n    currentPrice\n    currentPriceUSD\n    __typename\n  }\n  parts {\n    id\n    name\n    class\n    type\n    specialGenes\n    __typename\n  }\n  __typename\n}\n",
//     }});
// }     

const eyeParser = (bodyPart, parts) => {
    if (bodyPart) {
        const body = 'eye';
        const dashed = spaceToDash(bodyPart);
        const parsed = addBody(body, dashed);  
        parts.push(parsed); 
    }
}

const earParser = (bodyPart, parts) => {
    if (bodyPart) {
        const body = 'ears';
        const dashed = spaceToDash(bodyPart);
        const parsed = addBody(body, dashed);  
        parts.push(parsed); 
    }
}

const backParser = (bodyPart, parts) => {
    if (bodyPart) {
        const body = 'back';
        const dashed = spaceToDash(bodyPart);
        const parsed = addBody(body, dashed);  
        parts.push(parsed); 
    }
}

const mouthParser = (bodyPart, parts) => {
    if (bodyPart) {
        const body = 'mouth';
        const dashed = spaceToDash(bodyPart);
        const parsed = addBody(body, dashed);  
        parts.push(parsed); 
    }
}

const hornParser = (bodyPart, parts) => {
    if (bodyPart) {
        const body = 'horn';
        const dashed = spaceToDash(bodyPart);
        const parsed = addBody(body, dashed);  
        parts.push(parsed); 
    }
}

const tailParser = (bodyPart, parts) => {
    if (bodyPart) {
        const body = 'tail';
        const dashed = spaceToDash(bodyPart);
        const parsed = addBody(body, dashed);  
        parts.push(parsed); 
    }
}

const spaceToDash = (bodyPart) => {
    for(let i = 0; i < bodyPart.length; i++) {
        if(bodyPart.charAt(i) === ' ') {
            return bodyPart.substring(0, i) + '-' + bodyPart.substring(i + 1);
        }        
    }
    return bodyPart;
}

function addBody (body, bodyPart) {
    return body + '-' + bodyPart;
}

async function postQuery (data) {
    console.log(data);
    url = 'https://graphql-gateway.axieinfinity.com/graphql';
    try {
        const response = await axios.post(url, data)
        if(response.status === 200) {
            return response;
        }
    } catch(error) {
        console.error(error.response.data);
    }
}

function checkResponse (maxPrice, axies) {
    const decimalDiff = 1000000000000000000;
    for(let i = 0; i < axies.results.length; i++) {
        const price = axies.results[i].auction.currentPrice / decimalDiff;
        if(price <= maxPrice) {
            console.log("hit");
            hitService.createHit(axies.results[i]);
        }
        if(price > maxPrice) {
            return;
        }
    }
}

module.exports = {
    searchToQuery,
    createQuery,
    postQuery,
    checkResponse,
    getAllQueries,
    getQueryById,
    deleteQueryById,
};