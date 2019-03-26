const orderEnum = require('../../enum/order');

module.exports = {
    handleStateOrders(order) {
        if (order) {
            return order.status = orderEnum.CONFIRMED;
        }
        return null;
    }
}