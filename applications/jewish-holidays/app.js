const express = require("express");
const app = express();

app.set('view engine', 'ejs');

const PORT = 3000;
app.use(express.json()) // -> req.body

// ROUTES
app.get('/', (req, res) => {
    //res.status(200).send('hello world');
    res.render('index');
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});

