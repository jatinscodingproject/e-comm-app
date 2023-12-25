const express = require('express');

const router = express.Router();

const path = require('path');

const rootdir = require('../utils/path')

router.get('/add-product',(req,res,next) => {
    res.sendFile(path.join(rootdir,'views','add-product.html'))
})

router.post('/add-product',(req,res,next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router