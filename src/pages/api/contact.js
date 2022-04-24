export default async function (req, res) {
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport(process.env.smtp);

  const message = {
    from: '"Customer support 👻" <support@gmail.com>',
    to: process.env.receivers,
    subject: 'Incoming request ✔',
    text: `Call to client for details ${req.body.phone} ~${req.body.price} price`,
    html: `<p>Call to client for details <b>${req.body.phone}</b> ~<b>${req.body.price}</b> price</p>`,
  };

  const info = await transporter.sendMail(message);

  res.status(200).json(info);
}
