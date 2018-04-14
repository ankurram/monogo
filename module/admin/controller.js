var Query = require("./model");
var sess ;


exports.show_admin_login_page  = function(req,res){

    res.render("admin_login");
}

exports.home_page = function(req,res){
    console.log("ankur",req.body);
    var data ={
        name: req.body.username,
        psd : req.body.Password
    }
    console.log(data);
    if(data.name == '' || data.psd == '')
    {
       res.render('err_admin',{empty_err:'plase fill up the all field'});
    }
    else if(data.name == undefined || data.psd == undefined || req.session == null)
    {

//        console.log(localStorage.getItem('name'));
        console.log("hiiiii",req.session);
        res.render('index.ejs',{username:sess.name})
    }
    else
    {
            Query.find_admin(data,function(err,results)
        {
            if(err) throw err
               if(results.length == 0)
                   {
                       console.log("no length");
                        res.render('err_admin',{no_user:'plase fill up the valid username and password'});
                   }
                else
                    {
                        console.log("show length",results);
                        sess = req.session;
                        sess.name = results[0].name;
                        console.log("session are start",sess);
                        res.render('index.ejs',{username:sess.name})

                    }
            })
        }


}

exports.home = function(req,res){
     console.log("ankurram");
    res.render('pants.ejs',{username:"ankur"});

}
