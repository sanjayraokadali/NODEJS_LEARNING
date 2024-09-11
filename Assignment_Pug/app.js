
const express = require('express');

const bodyParser = require('body-parser');
const router = require('./routes/base');

const app = express();

app.set('view machine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended : false}));

app.use(router);


app.listen(3003);