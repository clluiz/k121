const API_KEY = 'key-88bed0e424b099b07dada523ba6a7ddb';
const DOMAIN = 'mg.clluiz.com';
const mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});
  
function enviarEmail(to, amigo) {
    const data = {
        from: 'Amigo oculto <postmaster@mg.clluiz.com>',
        to: to,
        subject: 'Seu amigo oculto foi sorteado!',
        text: `O seu amigo oculto é o(a) ${amigo}`
      };
    mailgun.messages().send(data, function (error, body) {
        console.log(body);
    });      
}

module.exports = enviarEmail;


