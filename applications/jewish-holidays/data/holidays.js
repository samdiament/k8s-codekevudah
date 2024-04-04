const yaml = require('js-yaml');
const fs = require('fs');
const express = require('express');
const router = express.Router();

const holidays = fs.readFile('./holidays.yml', 'utf8', function(e, data) {
    var fileContents;
    if (e) {
        throw e;
    }
    fileContents = yaml.load(data, 'utf8');
    //console.log(holidays);
    return holidays;
});

module.exports = holidays;
console.log(module.exports.holidays);








