const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) =>{

    console.log('/add-product');

    res.send('<form action="/product" method="POST"> \
             \
             <input type="text" name="productname"> \
             <input type="submit" value="add product">\
             </form>\
             ');

});

router.post('/product', (req, res, next) =>{

    console.log('/add-product');
    var value = req.body.productname;
    res.send('<h4>'+value+'</h4>')
    
});

module.exports = router;