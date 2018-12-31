const Currencies = {
  USD: 'USD',
  CLP: '$',
};

function cleanAmount(amount) {
  return amount.replace(/(,|\.|\$)/g, '');
}

/**
 * Return amount in millis for YNAB
 * @param {string} amount with 2 decimals and a comma
 */
function parseDollars(amount) {
  return parseInt(`${cleanAmount(amount)}0`, 10);
}

/**
 * Return amount in millis for YNAB
 * @param {string} amount with NO decimals and a thousands dot.
 */
function parsePesos(amount) {
  return parseInt(`${cleanAmount(amount)}000`, 10);
}

module.exports = function parseAmount({ amount, currency }) {
  switch (currency) {
    case Currencies.USD:
      return -1 * parseDollars(amount);
    case Currencies.CLP:
    default:
      return -1 * parsePesos(amount);
  }
};
