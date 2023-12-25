const rootdir = require('../utils/path')

const path = require('path')

exports.getContactus = (req,res,next) => {
    res.sendFile(path.join(rootdir,'views','contact-us.html'))
}

exports.postContactus = (req,res,next) =>{
    console.log(req.body);
    res.redirect('/success')
}

exports.getSuccess = (req,res,next) =>{
    res.sendFile(path.join(rootdir,'views','success.html'))
}

