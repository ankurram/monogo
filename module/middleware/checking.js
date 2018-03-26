var new_user = require('../user_schema/new_user');


exports.checkSession = function(data,callback)
{
    console.log("there session check start-----------",data);
    new_user.find({email:data.email},{ email: 1 },[],function(err,results){
        if(err)throw err
        console.log(results);
        callback(null,results);
    })

}
