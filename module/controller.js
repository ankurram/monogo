var Query = require("./model");
var http = require("http");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var formidable = require('formidable');
var fs = require('fs');
var session = require('express-session');
var middleware = require(process.PATHS.MIDDLEWARE);
var sess;

exports.display_fb_page = function(req,res){
    console.log("ankur");
    res.render("facebook.jade");
}


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
    console.log("ankur",sess);
    data =
        {
        name: sess.name,
        email:sess.email
    }
    middleware.checkSession(data,function(err,result){
        if(err)throw err
        if(result.length == 0)
            {
                res.send({value:false})
            }
        else
            {
                Query.find_basic_info(data,function(err,result){
                    if(err)throw err
                    console.log("oooo",result);
                    res.send(result);
                })
            }
    })
}
exports.address_info = function(req,res)
{

      if(typeof sess == "undefined")
    {
        console.log("session is undefine");
        res.send({re:1})
    }
    else
        {
             console.log("this is address info",sess);
             data = sess.email;
             Query.address_get(data,function(err,result){
             if(err)throw err
             console.log("address",result);
             res.send(result);
    })

        }

}

exports.social_info_store = function(req,res)
{
    console.log("there social login atart",req.body);
    full_user_info = req.body;
    data = req.body.email;
    Query.find_social_user(data,function(err,result){
        if(err) throw err
        if(result.length == 0)
            {
              Query.insert_social_info(full_user_info,function(err,result){
              if(err)throw err
              sess = req.session;
              sess.name = req.body.displayName;
              sess.email = req.body.email;
                  console.log("this ------",sess);
                  res.send({name:sess.name});
              })
            }
        else
            {
                console.log("this is not-----",result);
                sess = req.session;
                sess.name = result[0].name;
                sess.email = result[0].email;
                console.log("this is session",sess);
                res.send({name:sess.name});
            }


    })
}

exports.insert_user_address = function(req,res)
{
    console.log("this add address",req.body,sess);
   if(typeof sess == undefined)
       {
           res.send({value:false})
       }
    else
        {
            data = req.body;
            email = sess.email;
            Query.save_address(email,data,function(err,result){
                if(err)throw err
                res.send({value:1});
            })
        }

}
