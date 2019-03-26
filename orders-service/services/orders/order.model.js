var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    number: Number,
    description: String,
    status: String,
});

const OrderList = module.exports = mongoose.model('order', OrderSchema);

module.exports.getById = (value, callback) => {
    OrderList.findById(value).exec(callback);
}

module.exports.get = (pageNo, pageSize, callback) => {
    var query = {};
    query.skip = pageSize * (pageNo - 1);
    query.take = pageSize;
    OrderList.count({}, function (err, totalItems) {
        OrderList.find({}, {}, query, callback);
    });
}

module.exports.add = (newList, callback) => {
    newList.save(callback);
}

module.exports.delete = (id, callback) => {
    let query = { _id: id };
    OrderList.remove(query, callback);
}

module.exports.update = (updatedOrder, callback) => {
    updatedOrder.save(callback);
}

