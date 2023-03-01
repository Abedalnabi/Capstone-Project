const nodemailer = require('nodemailer');

//  import env
const { AUTH_EMAIL_PASSWORD, EMAIL_USER, EMAIL_HOST, SERVICE_NAME, SMTP_EMAIL_PORT } = require('../config/env/env');

const sendEmail = (targetEmail, verifyEndpoint) => {
  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    service: SERVICE_NAME,
    port: SMTP_EMAIL_PORT,
    auth: {
      user: EMAIL_USER,
      pass: AUTH_EMAIL_PASSWORD,
    },
  });

  const serviceConfiguration = {
    from: `"Mohammad Abedalnabi" <${EMAIL_USER}>`,
    to: targetEmail,
    subject: 'CBMIS',
    html: `<p>click on this link to verify your account : ${verifyEndpoint}</p>`,
  };

  transporter.sendMail(serviceConfiguration, (err, info) => {
    console.log('err', err);
    if (err) return err;
  });
};

module.exports = {
  sendEmail,
};
