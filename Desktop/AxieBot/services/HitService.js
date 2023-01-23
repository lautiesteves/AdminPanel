const hitDB = require('../database/hit');

const createHit = (result) => {
    console.log(result.id);
    if(!hitDB.checkIfIdExists(result.id)) {
        const hit = parseHit(result);
        //console.log(hit);
        hitDB.createHit(hit);
    }
}

const parseHit = (result) => {
    const decimalDiff = 1000000000000000000;
    return({
        "_id": result.id,
        "searchName": result.searchName,
        "classes": result.class,
        "eye": {
            "name": result.parts[0].name,
            "class": result.parts[0].class    
        },
        "ear": {
            "name": result.parts[1].name,
            "class": result.parts[1].class    
        },
        "back": {
            "name": result.parts[2].name,
            "class": result.parts[2].class    
        },
        "mouth": {
            "name": result.parts[3].name,
            "class": result.parts[3].class    
        },
        "horn": {
            "name": result.parts[4].name,
            "class": result.parts[4].class    
        },
        "tail": {
            "name": result.parts[5].name,
            "class": result.parts[5].class    
        },
        "breedCount": result.breedCount,
        "price": result.auction.currentPrice / decimalDiff, 
    });
}

module.exports = {
    createHit,
}