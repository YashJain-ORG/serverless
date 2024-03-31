var formData = require('form-data');
var Mailgun = require('mailgun.js');
const db = require('./config.js');
const Users =db.Users;

// Initialize the Mailgun client with the environment variable for the API key
var mailgun = new Mailgun(formData);
var mg = mailgun.client({
  username: 'api',
  key: '4183283d2f816176128d7967a1f20a0c-f68a26c9-497efd0c',
});
 
exports.sendEmail = async function(event, context) {
  try {
    // Decode the Pub/Sub message
    var message = event.data
      ? Buffer.from(event.data, 'base64').toString()
      : '{}';
    var payload = JSON.parse(message);
 
    var userEmail = payload.username;
    var id = payload.id;
    var url = 'http://thewebapp.me:3000/verify/' + id;

    var emailOptions = {
      from: '<mailgun@thewebapp.me>',
      to: userEmail,  
      subject: 'Email Verification',
      text: 'Please verify your email address.',
      html: '<h1>Please click below to verify</h1><a href="' + url + '">' + url + '</a>',
    };

    var response = await mg.messages.create('thewebapp.me', emailOptions);
    
    // Update the email_sent_time in the users table
    await Users.update(
      { email_sent_time: new Date() },
      { where: { email: userEmail } }
    );

    console.log('Email sent:', response);
  } catch (error) {
    console.error('Failed to send email:', error);
  }
};
