var mongoose = require('mongoose');
var admin_user = new mongoose.Schema({
    name: String,
    password : String,
    created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model('admin_user', admin_user);
