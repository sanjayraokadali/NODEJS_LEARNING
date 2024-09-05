const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) =>{ // TAKES IN A GET REQUEST

    console.log('/add-product');

    res.send('<form action="/admin/product" method="POST"> \
             \
             <input type="text" name="productname"> \
             <input type="submit" value="add product">\
             </form>\
             ');

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