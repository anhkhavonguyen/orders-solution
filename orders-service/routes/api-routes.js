var express = require('express');
var router = express.Router();
var orderRoutes = require('./orders');

router.use('/orders', orderRoutes);

module.exports = router;


