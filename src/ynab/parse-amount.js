const Currencies = {
  USD: 'USD',
  CLP: 'CLP',
};

function removeDotsAndCommas(amount) {
  return amount.replace(/(,|\.)/g, '');
}

/**
 * Return amount in millis for YNAB
 * @param {string} amount with 2 decimals and a comma
 */
function parseDollars(amount) {
  return `${removeDotsAndCommas(amount)}0`;
}

/**
 * Return amount in millis for YNAB
 * @param {string} amount with NO decimals and a thousands dot.
 */
function parsePesos(amount) {
  return `${removeDotsAndCommas(amount)}000`;
}

module.exports = function parseAmount({ amount, currency }) {
  switch (currency) {
    case Currencies.USD:
      return parseDollars(amount);
    case Currencies.CLP:
    default:
      return parsePesos(amount);
  }
};
