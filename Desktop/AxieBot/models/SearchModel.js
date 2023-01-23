const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema(
    {      
        "searchName": String,
        "classes": String,
        "eye": String,
        "ear": String,
        "back": String,
        "mouth": String,
        "horn": String,
        "tail": String,
        "breedCount": Number,
        "maxPrice": Number
    }
);

module.exports = mongoose.model('Search', searchSchema);