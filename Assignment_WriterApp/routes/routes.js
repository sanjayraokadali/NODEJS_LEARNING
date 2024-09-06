const express = require("express");
const path = require('path');
const rootPath = path.join(__dirname, '..', 'views');

const routes = express.Router();

routes.post('/show-content', (req, res, next) =>{
    const content = req.body.content;
    res.send('<h4>'+content+'</h4>');
});

routes.get('/add-content', (req, res , next) =>{
    console.log('/add-content');
    res.status(200).sendFile(path.join(rootPath, 'add-content.html'));
});

routes.get('/', (req, res, next) =>{
    res.sendFile(path.join(rootPath, 'index.html'))
});

module.exports = routes;