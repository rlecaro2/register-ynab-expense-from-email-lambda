const AWS = require('aws-sdk');

AWS.config.setPromisesDependency(Promise);
const s3 = new AWS.S3();

const bucketName = 'rafalecaros-mail/ynab-integration-visa-bci';

module.exports = async function getEmailBody(event) {
  try {
    console.log('Processing email');
    const sesNotification = event.Records[0].ses;

    // Retrieve the email from your bucket
    const emailData = await s3.getObject({
      Bucket: bucketName,
      Key: sesNotification.mail.messageId
    }).promise();

    console.log('email data:\n' + emailData);
    console.log('Raw email:\n' + emailData.Body);

    return emailData.Body;
  } catch (error) {
    console.log(error, error.stack);
  }
};
