
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{

    const title = "Index Page";
    const content = "Some shitty content";

    res.render('index.hbs', {title: title, content: content});
});

module.export = router;