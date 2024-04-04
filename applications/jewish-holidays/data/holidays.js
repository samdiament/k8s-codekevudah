function getHolidays(filePath) {

    const yaml = require('js-yaml');
    const fs = require('fs');
    
    var fileContents = fs.readFileSync(filePath, 'utf8');
    if (fileContents.length < 1) {
        throw new Error ('Error: blank file');
    }
    holidays = yaml.load(fileContents, 'utf8');
    return holidays;
}

module.exports = { getHolidays };

//console.log(getHolidays('./holidays.yml'));
//holidays = getHolidays('./holidays.yml');
//console.log(holidays.purim);








