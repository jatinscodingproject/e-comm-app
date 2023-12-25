const express = require('express');

const router = express.Router()

const path = require('path');

const conatctusControllers = require('../controllers/contact-us')

router.get('/contact-us',conatctusControllers.getContactus)

router.post('/contact-us',conatctusControllers.postContactus)

module.exports = router