const handler = require('./handler');
const getEmail = require('./get-email');

async function processEmail (event) {
  const emailBody = await getEmail(event);
  console.log('Got email body ' + emailBody);
  // TODO: parse
  // TODO: send to YNAB
};

// Wrap execution in handler
exports.handler = handler(processEmail);
