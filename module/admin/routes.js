var path = require('path');
var express = require('express');
var controller = require('./controller');
var router = express.Router();

router.route('/')
     .get(
           controller.show_admin_login_page
         )




module.exports = function(app) {
    app.use('/admin', router);
};
