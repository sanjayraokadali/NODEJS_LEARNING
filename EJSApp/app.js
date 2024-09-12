
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const route = require('./routes/base');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));

app.use(route);


app.listen(8000);