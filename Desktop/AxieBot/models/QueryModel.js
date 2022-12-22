const mongoose = require('mongoose');

const criteriaSchema = new mongoose.Schema({
    "classes": String,
    "parts": Array,
    "breedCount": Number
}, { _id: false });

const variableSchema = new mongoose.Schema({
    "auctionType": String,
    "sort": String,
    "criteria": criteriaSchema
}, { _id: false });

const queryInfoSchema = new mongoose.Schema({      
    "operationName": String,
    "variables": variableSchema,
    "query": String
}, { _id: false });

const querySchema = new mongoose.Schema({
    "searchName": String,
    "maxPrice": Number,
    "query": queryInfoSchema
});

module.exports = mongoose.model('query', querySchema);

