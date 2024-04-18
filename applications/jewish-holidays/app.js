const express = require("express");
const bodyParser = require('body-parser');
//const formidable = require("formidable");
const { getHolidays } = require('./data/holidays.js');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;
app.use(express.json()) // -> req.body
app.use(express.static(__dirname + '/public')); // set up static directory for public files - including css


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// ROUTES
app.get('/', (req, res) => {
    //res.status(200).send('hello world');
    res.render('pages/index', {
        pageTitle: "Jewish Holidays"
    });
});

app.get('/holidays', (req, res, next) => {

    //const form = formidable({ multiples: true });
    holidays = getHolidays('./data/holidays.yml');

    //console.log(holidays['holidays']['pesach']);
    //console.log(holidays['holidays'][req.query.holiday]);
    //console.log(req.query.holiday);

    res.render('pages/holidays', {
        pageTitle: "Jewish Holidays",
        holiday: holidays['holidays'][req.query.holiday]
    });
});

app.get('/holidays', (req, res, next) => {
    holidays = getHolidays('./data/holidays.yml');

    res.render('pages/holidays-all', {
        pageTitle: "Jewish Holidays",
        holidays: holidays
    });
})


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});

