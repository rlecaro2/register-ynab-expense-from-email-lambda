import getEmail from './get-email';

exports.handler = async function (event, context, callback) {
  const emailBody = await getEmail(event);
  console.log('Got email body ' + emailBody);
  // TODO: parse
  // TODO: send to YNAB
};
