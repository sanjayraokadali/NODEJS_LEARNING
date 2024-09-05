
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false})); // a middleware function for parsing body

app.use('/admin', adminRoutes); // Adding Route Filters.
app.use(shopRoutes);

app.use((req, res, next) =>{ // Page Not Found Handler!
    res.status(404).send('<h2>Page Not Found</h2>');
});


app.listen(3001);

