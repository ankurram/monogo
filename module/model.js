var User = require('./user_schema/user');
var UserReg = require('./user_schema/userreg');
var new_user = require('./user_schema/new_user');
var Address = require('./user_schema/address');
var  mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

exports.insert = function(req,data,callback)
{

      console.log(req.body);
    console.log("insert is start");
    var newUser = User({
         product_name: 'redmi_note41',
         path: 'http://localhost:8000/info/product_display/?image=m3.jpg',
         rate: '9000'         
  
});
console.log(newUser);
    newUser.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});

};
 exports.user_register = function(data,callback)
 {
   console.log(data);
   var reg = UserReg();
   reg.email = data.email;
   reg.username = data.username;
   reg.save(function(err) {

      if (err) throw err;
    
      console.log('User saved successfully!');
    });
  
   console.log("this restion");
 }

exports.find_product_detiles = function(callback)
{
    User.find({},function(err,results){
        if(err) throw err
        console.log(results);
        callback(null,results);
    })
}
exports.Add_new_user = function(data1,callback)
{
    console.log("ankur",data1);
    new_user({
    name :data1.name,
    username : data1.username,
    email : data1.email,
    password : data1.password})
    .save(function(err,results){
        if(err)throw err
        console.log("data will be save",results);
        callback(null,results);
    })

}
exports.find_user = function(data,callback)
{
     console.log("user find start there",data);
       var user_mail = data.user_email;
       var password = data.user_password;
    console.log("user_email",user_mail);
     new_user.find({email:user_mail,password:password},[],function(err,result){
         if(err)throw  err;
         //console.log(result);
         callback(null,result);
     })

}
exports.find_basic_info = function(data,callback)
{
    console.log("this is basic info",data);
    new_user.find({email:data.email},{ email: 1, name: 1, username: 1 },[],function(err,results){
        if(err)throw err
        console.log(results);
        callback(null,results);
    })
}

exports.address_get = function(data,callback)
{
    console.log("this is address get",data);
    Address.find({email:data},[],function(err,result){
        if(err) throw err
        console.log("this is address of user",result)
        callback(null,result);
    })

}

exports.find_social_user = function(data,callback)
{
    console.log("this model start",data);
    new_user.find({email:data},{email:1,name:1,username:1},[],function(err,results){
        if(err)throw err
        callback(null,results);
    })
}

exports.insert_social_info = function(data,callback)
{
    console.log("this is insert social info",data);
    new_user({
        name : data.displayName,
        email : data.email,
        profile_picture : data.photoUrl})
            .save(function(err,results){
        if(err)throw err
        callback(null,results);
    })
}

exports.save_address = function(email,data,callback)
{
    console.log("this is inert to address infomation to user",email,data);
    Address({
        email:email,
        address:data.address,
        landmark:data.landmark,
        city:data.city,
        state:data.state,
        zip_conde:data.zipcode,
        country:data.conutry,
        contact_no:data.contact})
        .save(function(err,results){
        if(err)throw err
        callback(null,results)
    })
}
