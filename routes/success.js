const express = require('express');

const path = require('path');

const conatctusControllers = require('../controllers/contact-us');

const router = express.Router();

router.get('/success',conatctusControllers.getSuccess)

module.exports = router;