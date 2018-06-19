/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var passport=require('passport');
module.exports = {
signin:function(req,res){
        passport.authenticate('local', function(err,user,info){
              if (err){
                     return res.send({message:info.message});
              }
              if(!user){
                console.log('error');
                return res.send({message:info.message})
              }
              req.session.authenticated=true;
             // console.log('success');
              res.send({
                  message:info.message,
                  success:true,
                  usernamedb:user.username,
                  emaildb:user.email,
                  phonenumberdb:user.phonenumber
                });
             // return res.ok(); 
        })(req,res);
    },
    register: function(req,res){
        console.log(req.body);
        var username =  req.body.username;
        var password=   req.body.password;
        var email=      req.body.email;
        var phonenumber=req.body.phonenumber;
        User.create({username,password,email,phonenumber}).exec((err,user)=>{
            if(err){
                return res.send({
                    message:"error 'this username already exist"
                });
            }else{
                 res.send({
                    message: " new user created",
                    success: true,
                    isLoggedIn: true
                });
            }
        });
},
    

};

 