module.exports = (message) => {
    var api_key = '26cb0da05772a54114fa34a803872eec-0470a1f7-53d95845';
    var domain = '	sandbox30a8cbf6454341958c2cd43fbd372c69.mailgun.org';
    var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });
    var data = {
        from: 'RAJI VICTOR <vheektoure@gmail.com>',
        to: 'vheektoure@gmail.com',
        subject: ' YOUR NEW HOBBY ADDED',
        text: message
    };
    mailgun.messages().send(data, function (error, body) {
        console.log(body);
    });
}