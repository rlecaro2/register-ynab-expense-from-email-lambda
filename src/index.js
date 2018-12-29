const handler = require('./handler');
const getEmail = require('./get-email');
const parseEmail = require('./parse-email');

async function processEmail (event) {
  const emailBody = await getEmail(event);
  const emailData  = parseEmail(emailBody);
  // TODO: send to YNAB https://api.youneedabudget.com/
};

// Wrap execution in handler
exports.handler = handler(processEmail);
