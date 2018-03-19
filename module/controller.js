var Query = require("./model");
var http = require("http");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var formidable = require('formidable');
var fs = require('fs');
var i =0;
exports.display_fornt_page = function(req,res)
{
    console.log("ankur");
    Query.insert(function(err,results){
        if(err)throw err
    })
}
exports.register_user = function(req,res)
{
    console.log("registion is start",req.body);
     var data = {};
     data.email  = req.body.email;
     data.username = req.body.username;
     Query.user_register(data,function(err,results){
         if (err) throw err
     })
}
exports.all_users =  function(req,res)
{
    console.log("get all users");
     var data = {};
     data.email  = req.body.email;
     data.username = req.body.username;
  
     Query.user_register(data,function(err,results){
         if (err) throw err
     })
}
