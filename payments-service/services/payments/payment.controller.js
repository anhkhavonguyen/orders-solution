const paymentList = require('../payments/payment.model');
const paymentService = require('./payment.service');
const paymentEnum = require('../../enum/payment');

exports.get = function (req, res) {
    let pageNo = parseInt(req.query.pageNo);
    let pageSize = parseInt(req.query.pageSize);
    paymentList.get(pageNo, pageSize, (err, data) => {
        if (err) {
            res.json({ success: false, message: `Failed to load all lists. Error: ${err}` });
        }
        else {
            let totalPages = Math.ceil(data.length / pageSize);
            res.write(JSON.stringify({ success: true, data: data, totalPages: totalPages }, null, 2));
            res.end();
        }
    });
};

exports.post = function (req, res, next) {
    let newPayment = new paymentList({
        orderId: req.body.order.id,
        method: paymentEnum.method.CASH,
        state: paymentEnum.state.PAID
    });
    paymentList.add(newPayment, (err, data) => {
        if (err) {
            res.json({ success: false, message: `Failed to create a new list. Error: ${err}` });
        }
        else {
            let order = req.body.order;
            order.status = paymentService.handleStateOrders(order);
            res.write(JSON.stringify({ success: true, data: order }, null, 2));
            res.end();
        }
    });
}

exports.delete = function (req, res, next) {
    let id = req.params.id;
    paymentList.delete(id, (err, list) => {
        if (err) {
            res.json({ success: false, message: `Failed to delete the list. Error: ${err}` });
        }
        else if (list) {
            res.json({ success: true, message: "Deleted successfully" });
        }
        else
            res.json({ success: false });
    })
};
