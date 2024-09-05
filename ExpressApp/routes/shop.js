const express = require('express');

const routes = express.Router();

routes.get('/', (req, res, next) =>{
    console.log("index");
    res.send('<h3>Index Page</h3>');
});


module.exports = routes;