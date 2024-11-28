const { google } = require('googleapis');

const SERVICE_ACCOUNT_FILE = 'service.json';
const SCOPES = ['https://mail.google.com/'];  // https://www.googleapis.com/auth/gmail.send || https://mail.google.com/

const auth = new google.auth.GoogleAuth({
  keyFile: SERVICE_ACCOUNT_FILE,
  scopes: SCOPES,
});

auth.getClient().then(authClient => {
  authClient.subject = 'notice@quickfill.app';

  const gmail = google.gmail({ version: 'v1', auth: authClient });

  function createMessage(sender, to, subject, body) {
    const message = [
      `To: ${to}`,
      `From: ${sender}`,
      `Subject: ${subject}`,
      '',
      body,
    ].join('\n');

    const encodedMessage = Buffer.from(message)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    return { raw: encodedMessage };
  }

  const senderEmail = 'notice@quickfill.app';
  const recipientEmail = 'h.imtiaz194@gmail.com';
  const emailSubject = 'Test Email from Gmail API node';
  const emailBody = 'Hello, this is a test email sent using the Gmail API!';

  const email = createMessage(senderEmail, recipientEmail, emailSubject, emailBody);
  gmail.users.messages
    .send({ userId: 'me', requestBody: email })
    .then(response => {
      console.log(`Message sent! Message ID: ${response.data.id}`);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
}).catch(error => {
  console.error('Failed to authenticate:', error);
});
