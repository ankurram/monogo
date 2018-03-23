var mongoose = require('mongoose');

var UserReg = new mongoose.Schema({
    name:String,
    username: String,
    email:String,
    password:String,
    created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
  
});
module.exports = mongoose.model('UserReg', UserReg);







