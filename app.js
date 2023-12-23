const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log('in the middleware')
    next()// allows the request to continue the next middleware in line. 
});

app.use((req,res,next) => {
    console.log('i am another middleware')
    res.send('<h1>hello from express</h1>')
})

app.listen(3000)
