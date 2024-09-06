// MedBook App CodeBase

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const router = require('./routes/base');

app.use(bodyParser.urlencoded({extended: false}));

app.use(router.baseRouter);


app.get((req, res, next)=>{

    console.log("Page Not Found");
    res.status(404).send('<h2> style="color: red;">Page Not Found</h2>');

});

app.listen(4321);