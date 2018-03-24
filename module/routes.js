var path = require('path');
var express = require('express');
var router = express.Router();
var User = require('./user_schema/user');
var UserReg = require('./user_schema/userreg');
var multer = require('multer');
var upload = multer({ dest:"./uploads/" })
var controller = require('./controller');




router.route('/all_moblie')
     .get(
            controller.product_display
         )
router.route("/product_display")
      .get(
              controller.display_item
          )
router.route("/registion_of_newUsers")
       .post(
                controller.register_new_user
            )
router.route("/login")
      .post(
              controller.login_user
           )
router.route('/user_detalis')
      .get(
             controller.user_info
           )
module.exports = function(app) {
    app.use('/info', router);
};
