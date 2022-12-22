const mongoose = require('mongoose');

const partSchema = new mongoose.Schema(
    {
        "name": String,
        "class": String,
    }, {_id: false});

const hitSchema = new mongoose.Schema(
    {      
        "_id": Number,
        "searchName": String,
        "classes": String,
        "eye": partSchema,
        "ear": partSchema,
        "back": partSchema,
        "mouth": partSchema,
        "horn": partSchema,
        "tail": partSchema,
        "breedCount": Number,
        "price": Number
    }
);

module.exports = mongoose.model('Hit', hitSchema);