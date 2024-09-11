
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{

    const title = "Index Page";
    const content = "Some shitty content";

    res.render('homepage.hbs', {title: title, content: content});
});

router.get('/user-form', (req,res)=>{
    res.render('user-form.hbs');
})

router.post('/submit-user-form', (req, res)=>{
    email = req.body.email;
    feedback = req.body.feedback;

    if (email != '' && feedback != ''){
        res.render('show-feedback.hbs', {email:email, feedback:feedback});
    }
    else{
        res.render('show-feedback.hbs',{email:"Nothing Passed!"})
    }
    
})

module.exports = router;