var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PaymentSchema = new Schema({
    orderId: String,
    method: String,
    state: String
});

const PaymentList = module.exports = mongoose.model('payment', PaymentSchema);

module.exports.get = (pageNo, pageSize, callback) => {
    var query = {};
    query.skip = pageSize * (pageNo - 1);
    query.take = pageSize;
    PaymentList.count({}, function (err, totalItems) {
        PaymentList.find({}, {}, query, callback);
    });
}

module.exports.add = (newList, callback) => {
    newList.save(callback);
}

module.exports.delete = (id, callback) => {
    let query = { _id: id };
    PaymentList.remove(query, callback);
}

