const rootdir = require('../utils/path')

const path = require('path')

exports.getAddproduct = (req,res,next) => {
    res.sendFile(path.join(rootdir,'views','add-product.html'))
}

exports.postAddproduct = (req,res,next) => {
    console.log(req.body)
    res.redirect('/')
}

exports.getShop = (req,res,next) => {
    res.sendFile(path.join(rootdir,'views','shop.html'));
}

exports.get404 = (req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'./','views','404page.html'))
}