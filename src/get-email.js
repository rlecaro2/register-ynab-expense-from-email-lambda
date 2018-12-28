import AWS from 'aws-sdk';

const s3 = new AWS.S3();
const bucketName = 'rafalecaros-mail/ynab-integration-visa-bci';

export default async function getEmailBody(event) {
  try {
    console.log('Process email');
    const sesNotification = event.Records[0].ses;

    // Retrieve the email from your bucket
    const emailData = await s3.getObject({
      Bucket: bucketName,
      Key: sesNotification.mail.messageId
    }).promise();

    console.log("Raw email:\n" + emailData.Body);
    // TODO: decrypt
    return emailData.Body;
  } catch (error) {
    console.log(error, error.stack);
  }
};
