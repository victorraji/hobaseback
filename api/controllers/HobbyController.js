/**
 * HobbyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const sendSms = require ('../services/sms');
const sendEmail = require ('../services/email');
module.exports = {
    addhobby: function(req,res){
        console.log(req.body);
        var hobby =  req.body.hobby;
        var username=req.body.username;
        var email=req.body.email;
        var phonenumber=req.body.phonenumber;
        var message = "You have edited a hobby to " + req.body.hobby;

        Hobby.create({hobby,username,email,phonenumber}).exec((err,hobby)=>{
            if(err){
                console.log('error',err);
                return res.send({
                    message:"error",
                  
                });
            }else{
                 res.send({
                    message: "hobby created",
                    added:true,
                    success:true
              
                });
            }
            
        });
        var message ="You have added a hobby to " + req.body.hobby;

           sendSms(message).then((response) => {

               if (response.errorCode) {

                 res.json({

                   status: 'failed',

                   statusCode: 500,

                   message: 'could not send sms'

                 });

               }

             }).catch(error => {

               console.log("error", error);

               res.json({

                 status: 'failed',

                 statusCode: 200,

                 message: 'could not send sms'

               });

             });
             
           //  sendEmail(message)

    },

   displayhobbies: async (req,res)=>{
       console.log(req.body);
    var idsearch = await Hobby.find({
        where: {username:req.body.username},
        select: ['hobby','username']
      });
      return res.json(idsearch);
    },

    delete:async (req, res) => {
      
        console.log("Delete");
        
        try{
            var hobbies = await Hobby.destroy({id:req.params.id});
            console.log(" deleted");
            return res.send({
                success: true,
                status: "Deleted"
              });


        }
        catch(error){
            return res.send({
                success: false,
                status: "Error"
              });
        }   }
};

