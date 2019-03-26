const orderController = require("../services/orders/order.controller");
const express = require("express");

const router = express.Router();
router
    .route("/")
    .get(orderController.get)
    .post(orderController.post)

router
    .route("/cancel")
    .post(orderController.cancel)

router
    .route("/update/:id")
    .put(orderController.update)

router
    .route("/:id")
    .get(orderController.getBy)
    .delete(orderController.delete)

module.exports = router;


