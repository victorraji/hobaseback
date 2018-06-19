const twilio = require('twilio');
module.exports = (message) => {

  const accountSid = 'AC7970c6ce5b3009b36f35777a5cc4c994';
  const authToken = "890cb14a0c8a94ec86c1bc4a7515a2a5";
  const client = new twilio(accountSid, authToken);

  return client.messages.create({
    
    body: message,

    to: '+234 903 450 9113', // Text this number

    from: '+17323654229' // From a valid Twilio number

  })

}