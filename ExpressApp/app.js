
const express = require('express');
const app = express();

app.use('/product', (req, res, next) =>{
    console.log("product");
    res.send('<h3>/Product</h3>');
});

app.use('/', (req, res, next) =>{
    console.log("index");
    res.send('<h3>Index Page</h3>');
});



app.listen(3001);

