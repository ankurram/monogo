var path = require('path');
var express = require('express');
var controller = require('./controller');
var router = express.Router();

router.route('/')
     .get(
           controller.show_admin_login_page
         )
router.route('/admin_login')
    .post(
            controller.home_page
         )
router.route('/admin_login')
    .get(
            controller.home_page
         )
router.route('/ad')
    .get(
            controller.home
         )
module.exports = function(app) {
    app.use('/admin', router);
};

