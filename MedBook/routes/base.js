// BASE Routes

const express = require('express');
const router = express.Router();
const path = require('path');

const rootPath = path.join(__dirname, '..', 'views');


router.get('/login-page', (req, res, next)=>{
    console.log('/ login-page');
    res.status(200).sendFile(path.join(rootPath, 'login-page.html'));
});


router.get('/', (req, res, next) =>{
    console.log('/ index page');
    res.status(200).sendFile(path.join(rootPath, 'index.html'))
});

exports.baseRouter = router;