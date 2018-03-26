var mongoose = require('mongoose');
var  Address = new mongoose.Schema({
    user_email:String,
    address: String,
    landmark: String,
    city:String,
    state:String,
    contact_no:Number
});

module.exports = mongoose.model('Address', Address);

