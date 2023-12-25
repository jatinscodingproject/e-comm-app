const express = require('express');

const router = express.Router();

const path = require('path');

const productControllers = require('../controllers/product')

router.get('/add-product',productControllers.getAddproduct)

router.post('/add-product',productControllers.postAddproduct)

module.exports = router