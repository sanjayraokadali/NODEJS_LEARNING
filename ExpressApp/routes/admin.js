const express = require('express');
const path = require('path');

const router = express.Router();

function returnPath(){
    return path.join(__dirname, '../', 'views');
};

router.get('/add-product', (req, res, next) =>{ // TAKES IN A GET REQUEST

    res.sendFile(path.join(returnPath(), 'add-product.html'));

});

router.post('/product', (req, res, next) =>{ // TAKES IN A POST REQUEST

    console.log('/add-product');
    var value = req.body.productname;
    res.send('<h4>'+value+'</h4>')
    
});

router.get('/product', (req, res, next) => {
    res.status(200).send("<h5>GET REQUEST FOR PRODUCT</h5>");
});

module.exports = router;