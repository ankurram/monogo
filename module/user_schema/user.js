var mongoose = require('mongoose');


var User = new mongoose.Schema({
    product_name: String,
    path: String,
    rate: Number
});
module.exports = mongoose.model('User', User);







