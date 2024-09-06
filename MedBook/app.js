// MedBook App CodeBase

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const router = require('./routes/base');

app.use(bodyParser.urlencoded({extended: false}));

app.use(router.baseRouter);


app.listen(4321);