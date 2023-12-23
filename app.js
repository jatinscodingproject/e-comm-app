const express = require('express');

const app = express();

app.use('/add-product',(req,res,next) => {
    console.log('i am middleware')
    res.send('<h1>"Add product page"</h1>')
})

app.use('/',(req,res,next) => {
    console.log('i am another middleware')
    res.send('<h1>hello from express</h1>')
})

app.listen(3000)
