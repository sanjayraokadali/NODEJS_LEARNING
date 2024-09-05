
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false})); // a middleware function for parsing body

app.use(adminRoutes);

app.use(shopRoutes);


app.listen(3001);

