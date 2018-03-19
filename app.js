var express = require("express");
var glob = require("glob");
var jade = require('jade');
var passport  = require('passport');
var path = require('path');
var mysql = require("mysql");
var myConnection = require("express-myconnection");
var session = require('express-session');
var bodyParser = require("body-parser");
var passport = require('passport');
var cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/product_info');
var app = express();


app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(session({secret: 'ssshhhhh'}));
app.use(bodyParser.urlencoded({extended: true}));

process.env.APP_ROOT = __dirname;
//app.set('views', './view/')
////app.set('view engine', 'pug');
//app.set('view engine', 'jade');
app.use(express.static(path.join(process.env.APP_ROOT, '')));
 


var routes = glob.sync(path.join(process.env.APP_ROOT, 'module/**/routes.js'));
routes.forEach(function (route) {
    require(route)(app);
});


app.listen("8000", function () {
    console.log("server is starting on port 8000");
});
module.exports = app;