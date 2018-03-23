var User = require('./user_schema/user');
var UserReg = require('./user_schema/userreg');
var new_user = require('./user_schema/new_user');
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
    console.log("ankur");
    new_user({
    name :data1.name,
    username : data1.username,
    email : data1.email,
    password : data1.pws})
    .save(function(err,results){
        if(err)throw err
        console.log("data will be save",results);
        callback(null,results);
    })

}
exports.find_user = function(data,callback)
{
     console.log("user find start there");


}
