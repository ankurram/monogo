var path = require('path');
var express = require('express');
var router = express.Router();
var User = require('./user_schema/user');
var UserReg = require('./user_schema/userreg');
var multer = require('multer');
var upload = multer({ dest:"./uploads/" })
var controller = require('./controller');
var passport = require('passport');
//var middleware = require('./middleware/checking');
var middleware = require(process.PATHS.MIDDLEWARE)

router.route("/")
     .get(
              controller.display_fb_page
          )
//router.route('/auth/facebook')
//.get(
//  passport.authenticate('facebook')
//   );
//
//router.route('/auth/facebook/callback')
//.get(
//  passport.authenticate('facebook', { failureRedirect: '/login' }),
//  function(req, res) {
//    // Successful authentication, redirect home.
//    res.redirect('/');
//  });


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
router.route('/address_detalis')
      .get(
               controller.address_info
           )
router.route('/store_social_info')
      .post(
             controller.social_info_store
           )
router.route('/add_user_address')
      .post(
            controller.insert_user_address
          )
module.exports = function(app) {
    app.use('/info', router);
};
