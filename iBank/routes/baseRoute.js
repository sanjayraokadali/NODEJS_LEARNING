
const express = require('express');
const router = express.Router();


router.get('/register-user', (req,res)=>{
    res.render('register-user.hbs')
})

router.get('/', (req, res)=>{

    res.render('homepage.hbs');
});

module.exports = router;