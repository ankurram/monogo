var User = require('./user_schema/user');
var UserReg = require('./user_schema/userreg');
exports.insert = function(req,data,callback)
{

      console.log(req.body);
    console.log("insert is start");
    var newUser = User({
         product_name: 'redmi_note41',
         path: 'http://localhost:8000/info/display_all/?image=m3.jpg',
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

