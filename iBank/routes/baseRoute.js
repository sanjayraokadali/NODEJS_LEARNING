
const express = require('express');
const router = express.Router();
const baseController = require('../controllers/baseController');

router.post('/user-account', baseController.UserAccount);

router.get('/register-user', baseController.Register );

router.get('/login', baseController.Login );

router.get('/', baseController.Home);

module.exports = router;