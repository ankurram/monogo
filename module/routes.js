var path = require('path');
var express = require('express');
var router = express.Router();
var User = require('./user_schema/user');
var UserReg = require('./user_schema/userreg');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var multer = require('multer');
//var upload = multer({ dest:"../uploads/" })
var upload = multer({ dest:"./uploads/" })
var controller = require('./controller');

var autoIncrement = require("mongodb-autoincrement");
//var middleware = require("../config/middleware");
//var middleware1 = require("../config/passport");
router.route('/')
      .get(
             controller.display_fornt_page  
          )

router.route('/register')
      .post(
            controller.register_user
      )
router.route('/user')
      .get(
            controller.all_users
      )
module.exports = function(app) {
    app.use('/info', router);
};