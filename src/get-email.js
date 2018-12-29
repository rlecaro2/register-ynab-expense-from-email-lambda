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
    })
    .promise();

    return emailData.Body.toString('utf8'); // body is a buffer
  } catch (error) {
    console.log(error, error.stack);
  }
};
