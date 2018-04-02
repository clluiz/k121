const API_KEY = 'key-88bed0e424b099b07dada523ba6a7ddb';
const DOMAIN = 'sandboxa95e4fa1b5964207bfd79f3e9b61e4a4.mailgun.org';
const mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});
  
function enviarEmail(to, amigo) {
    const data = {
        from: 'Amigo oculto <postmaster@sandboxa95e4fa1b5964207bfd79f3e9b61e4a4.mailgun.org>',
        to: to,
        subject: 'Seu amigo oculto foi sorteado!',
        text: `O seu amigo oculto é o(a) ${amigo}`
      };
    mailgun.messages().send(data, function (error, body) {
        console.log(body);
    });      
}

module.exports = enviarEmail;


