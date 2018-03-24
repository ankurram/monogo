var Query = require("./model");
var http = require("http");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var formidable = require('formidable');
var fs = require('fs');
var session = require('express-session');
var sess;



exports.product_display = function(req,res)
{
     console.log("product display");
    Query.find_product_detiles(function(err,results){
        if(err) throw err
         res.send(results);

    })
}

exports.display_item = function(req,res)
{
    console.log("ankur kaushik");
    var image = req.query.image;
//
    console.log(image);
     fs.readFile("D:/ankur-server/uploads/"+image,function(err,data){
            if(err)throw err;
            console.log("data",data);
            res.writeHead(200,{'Content-type':'image/jpg'});
                  res.end(data);
        })
}
exports.register_new_user = function(req,res)
{
      console.log("this is new registion page");
        console.log(req.body);
        var data = req.body;
       Query.Add_new_user(data,function(err,result){
           if(err)throw err
           console.log("ankur",result.name);
           res.json({
               id:result._id,
               name:result.name,
               username:result.username,
               email:result.email

           });
       })
}

exports.login_user = function(req,res)
{
    console.log("ankur",req.body);
    var login_info  =req.body;
    console.log(login_info);
    if(login_info.user_email == '' && login_info.user_password == '')
        {
            res.send({value:1})
        }
    else{
    Query.find_user(login_info,function(err,results){
        if(err) throw err;
        console.log(results);
        if(results.length == 0)
            {
                console.log("ankur");
                res.send({value:2})
            }
        else
            {
                sess = req.session;
                sess.name = results[0].name;
                sess.email = results[0].email;
                
                
                console.log("this login session",sess);
                res.send({name:sess.name});
            }
    })
}
}

exports.user_info = function(req,res)
{
    console.log("ankur------------------------------------------",sess);
//    res.send({name:sess.name});
    
}