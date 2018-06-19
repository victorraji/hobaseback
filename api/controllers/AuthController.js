/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const passport=require('passport');
module.exports = {
  //login function
login:function(req,res){
    passport.authenticate('local',function(err,user,info){
           if (err|| !user){
               return res.send({message:info.message,
                user
            });
           }
         req.login(user,function(err){
            if (err) res.send(err);
            sails.log('user' +user.id +'has logged in');


         })
    })(req,res);
},
  //logout function
logout:function(req,res){
    req.logout();
    req.redirect('/');

},
//register
register:function(req,res){

    data={
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        description:req.body.description,
    }

    User.create(data).fetch().exec(function(err,user){
        if (err) return res.negotiate(err);
        req.login(user,function(err){
           if (err) return res.negotiate(err);
        sails.log('user' +user.id +'has logged in');
        return res.redirect('/');
    })

})
}

};

