var nodemailer = require('nodemailer');
var secrets = require('./secret');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: secrets.email,
    pass: secrets.pwd
  }
});

var mailOptions = {
  from: secrets.email,
  to: secrets.email,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});