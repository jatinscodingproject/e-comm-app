const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const path = require('path');

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop')

const contactusRoutes = require('./routes/contact-us')

const successRoutes = require('./routes/success')

const productControllers = require('./controllers/product')

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use(contactusRoutes);

app.use(successRoutes)

app.use(productControllers.get404);

app.listen(3000)
