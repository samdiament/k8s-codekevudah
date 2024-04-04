const yaml = require('js-yaml');
const fs = require('fs');

var fileContents = fs.readFileSync('./holidays.yml', 'utf8');
if (fileContents.length < 1) {
    throw new Error ('Error: blank file');
}
holidays = yaml.load(fileContents, 'utf8');
console.log(holidays);








