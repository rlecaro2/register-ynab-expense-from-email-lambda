const Ynab = require('ynab');
const parseAmount = require('./parse-amount');
const parseDate = require('./parse-date');

const accessToken = process.env.YNAB_API_KEY;
const ynab = new Ynab.API(accessToken);

const budgetId = process.env.YNAB_BUDGET_ID;
const accountId = process.env.YNAB_ACCOUNT_ID;

/**
 * @typedef Transaction
 * @prop {string} account_id
 * @prop {string} date
 * @prop {int} amount - in milis (1E3 instead of commas)
 * @prop {string} [payee_id]
 * @prop {string} [payee_name]
 * @prop {string} [category_id]
 * @prop {string} [memo]
 * @prop {cleared} [cleared]
 * @prop {true} [approved]
 * @prop {string} [flag_color]
 * @prop {string} [import_id]
 */

/**
  * Creates a transaction in YNAB
  * @param {object} transactionData
  * @param {string} transactionData.date
  * @param {string} transactionData.time
  * @param {string} transactionData.amount
  * @param {string} transactionData.purchaseType
  * @param {string} transactionData.commerce
  * @param {string} transactionData.cardNumber
  * @param {string} transactionData.currency
  */
module.exports = async function createTransaction({
  date,
  time,
  amount,
  commerce,
  currency,
}) {
  const memo = `${currency} ${amount} en ${commerce}`;

  const transaction = {
    account_id: accountId,
    date: parseDate({ date, time }),
    amount: parseAmount({ amount, currency }),
    memo,
  };

  return ynab.transactions.createTransaction(budgetId, { transaction });
};
