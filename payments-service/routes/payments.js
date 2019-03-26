const express = require("express");
const router = express.Router();
var paymentController = require("../services/payments/payment.controller");

router
    .route("/")
    .get(paymentController.get)
    .post(paymentController.post)

router
    .route("/:id")
    .delete(paymentController.delete)

module.exports = router;