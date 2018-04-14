var admin_store = require('../admin_schema/admin_user');

exports.find_admin = function(data,callback)
{
   console.log("ankur",data);
    admin_store.find({name:data.name},[],function(err,results){
        if (err) throw err
        callback(null,results);
    })
}
