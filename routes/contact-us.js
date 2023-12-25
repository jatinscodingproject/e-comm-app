const express = require('express');

const router = express.Router()

const path = require('path');

const rootdir = require('../utils/path')

router.get('/contact-us',(req,res,next) => {
    res.sendFile(path.join(rootdir,'views','contact-us.html'))
})

router.post('/contact-us',(req,res,next) =>{
    console.log(req.body);
    res.redirect('/success')
})

module.exports = router