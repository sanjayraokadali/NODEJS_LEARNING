const express = require('express');
const path = require('path');
const rootPath = require('../utils/path');

const routes = express.Router();

routes.get('/', (req, res, next) =>{
    res.sendFile(path.join(rootPath, 'index.html'));
});


module.exports = routes;