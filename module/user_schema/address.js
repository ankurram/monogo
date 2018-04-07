var mongoose = require('mongoose');
var  Address = new mongoose.Schema({
    email:String,
    address: String,
    landmark: String,
    city:String,
    state:String,
    zip_conde:Number,
    country: String,
    contact_no:Number
});

module.exports = mongoose.model('Address', Address);

