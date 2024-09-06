
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes/routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.use((req, res, next) =>{
    res.status(404).send('<h3>Page Not Found</h3>');
})

app.listen(3004);