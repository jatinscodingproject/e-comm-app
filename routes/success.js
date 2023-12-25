const express = require('express');

const path = require('path');

const rootdir = require('../utils/path');

const router = express.Router();

router.get('/success',(req,res,next) =>{
    res.sendFile(path.join(rootdir,'views','success.html'))
})

module.exports = router;