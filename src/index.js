const handler = require('./handler');
const getEmail = require('./get-email');
const parseEmail = require('./parse-email');
const createTransaction = require('./ynab/create-transaction');

async function processEmail(event) {
  try {
    const emailBody = await getEmail(event);
    const emailData = parseEmail(emailBody);
    await createTransaction(emailData);
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
  }
}

// Wrap execution in handler
exports.handler = handler(processEmail);
