const express = require('express');

const router = express.Router();

const path = require('path');

const productControllers = require('../controllers/product')

router.get('/',productControllers.getShop);

module.exports = router;