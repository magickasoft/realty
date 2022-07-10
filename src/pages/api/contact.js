const {MailtrapClient} = require('mailtrap');
export default function (req, res) {
  const client = new MailtrapClient({token: '16daf367bfd3849d5c135286c71d55c5'});

  const message = {
    from: {name: 'novostroiki 54', email: 'sender@novostroiki-54.ru'},
    to: [{email: 'es.shmakov@gmail.com'}, {email: 'vsenovostroiki123@gmail.com'}],
    subject: 'Incoming request ✔',
    text: `Call to client for details ${req.body.phone} server-${process.env.NODE_ENV}`,
    html: `<p>Call to client for details <b>${req.body.phone}</b> server-${process.env.NODE_ENV}</p>`,
  };

  client.send(message).then(
    ({success}) => {
      res.status(200).json({success});
    },
    ({error}) => {
      res.status(500).json({error});
    },
  );
}
