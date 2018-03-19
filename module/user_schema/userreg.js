var mongoose = require('mongoose');
var autoIncrement = require('mongoose-ai');

var UserReg = new mongoose.Schema({
    username: String,
    email:String,
    created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now },
    tags: { type: Number, default:0 } 
  
});
module.exports = mongoose.model('UserReg', UserReg);







