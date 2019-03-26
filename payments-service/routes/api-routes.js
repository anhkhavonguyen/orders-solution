var express = require('express');
var router = express.Router();
var paymentRoutes = require('./payments');

router.use('/payments', paymentRoutes);

module.exports = router;


