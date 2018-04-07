var mongoose = require('mongoose');
var new_user = new mongoose.Schema({
    name:String,
    username: String,
    email:String,
    password:String,
    profile_image:String,
    created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }

});
module.exports = mongoose.model('new_user', new_user);
