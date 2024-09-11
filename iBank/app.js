
const express = require('express');
const app = express();
const hbs = require('express-handlebars');

const baseRoute = require('./routes/baseRoute');



app.engine('hbs', hbs.engine({extname: '.hbs', layoutsDir: './views/layouts', defaultLayout:'index'}));
app.set('view engine', 'hbs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.use(baseRoute);


app.listen(8080);