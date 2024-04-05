function getHolidays(filePath) {

    const yaml = require('js-yaml');
    const fs = require('fs');
    
    if (!fs.existsSync(filePath)){
        throw new Error ('Error: file does not exist');
    }
    
    var fileContents = fs.readFileSync(filePath, 'utf8');
    holidays = yaml.load(fileContents, 'utf8');
    return holidays;
}

module.exports = { getHolidays };

//console.log(getHolidays('./data/holidays.yml')['holidays']['purim']);
//holidays = getHolidays('./holidays.yml');
//console.log(holidays.purim);








