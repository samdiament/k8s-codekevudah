const express = require("express");
const bodyParser = require('body-parser');
//const formidable = require("formidable");
const { getHolidays } = require('./data/holidays.js');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;
app.use(express.json()) // -> req.body

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


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});

