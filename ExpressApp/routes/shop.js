const express = require('express');
const path = require('path');

const routes = express.Router();

function returnPath(){
    return path.join(__dirname, '../', 'views');
};

routes.get('/', (req, res, next) =>{
    res.sendFile(path.join(returnPath(), 'index.html'));
});


module.exports = routes;