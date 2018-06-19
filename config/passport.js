var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
    bcrypt = require('bcrypt-nodejs');

passport.use(new LocalStrategy(function (username,password,done){
    User.findOne({
        username:username
    },function(err,user){
        if (err){

            return res.send(err);
         } 
        if(!user){
         return done(null,false,{message:'username not found'});
        }
        bcrypt.compare(password,user.password,function(err,res){
            if(!res){
               return done(null,false,{message:'password not recognized'});
            }
               return done (null,user,{message:'sign in success'});
               
            });
            

    });

}));