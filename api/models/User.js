/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var bcrypt=require('bcrypt-nodejs');
module.exports = {
datastore:'mongodb',
  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
      username:{
        type:'string',
        unique:'true',
        required:true,
      },
      password:{
        type:'string',
        required:true,
        minLength: 6
      } ,
      email:{
        type:'string',
        unique:'true',
      },
      phonenumber:{
        type:'string',
        unique:'true',
      
      },
    },
    
    beforeCreate:function(user,cb){
      bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(user.password,salt,null,function(err,hash){
          if(err){
            console.log(err);
          }else{
            user.password=hash;
          }
          cb();
        });
      });
    }
 

};

