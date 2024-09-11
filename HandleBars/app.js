
const express = require('express');
const app = express();
const body = require('body-parser');
const expressHbs = require('express-handlebars');

app.engine('hbs', expressHbs.engine({extname: '.hbs', defaultLayout: 'index'}));
app.set('view engine', 'hbs');

const router = require('./routes/root');

app.use(body.urlencoded({extended:false}));
app.use(router);



app.listen('3005');

