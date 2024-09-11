
const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{

    res.render('index.pug');
});

router.post('/user', (req, res)=>{
    username = req.body.username;

    res.render('user-list.pug', {username : username});
});


module.exports = router;