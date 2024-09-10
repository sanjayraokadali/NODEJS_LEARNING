// BASE Routes

const express = require('express');
const router = express.Router();
const path = require('path');

const rootPath = path.join(__dirname, '..', 'views');


router.get('/login-page', (req, res, next)=>{
    console.log('/ login-page');
    res.status(200).sendFile(path.join(rootPath, 'login-page.html'));
    // res.render('base.pug');
});


router.get('/', (req, res, next) =>{
    // console.log('/ index page');
    // res.status(200).sendFile(path.join(rootPath, 'index.html'))
    res.render('base.pug', {'object': ["sample object","another object"], 'docTitle': "Shop Page"});
});

router.get('/homepage', (req, res, next)=>{
    const items = 
        [{
            "name" : "Alice",
            "age": 34
        },
        {
            "name" : "Bob",
            "age": 13
        }]
    
    res.render('homepage.pug', {'object': ["sample object","another object"], 'docTitle': "Shop Page", i: items});
});

exports.baseRouter = router;