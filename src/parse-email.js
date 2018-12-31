
function getMatch(message, regex, getFull = false) {
  const maybeValue = message.match(regex);
  if (getFull) return maybeValue || [];

  return maybeValue ? maybeValue[0] : '';
}

/**
 * Returns the appropiate regex for amount and currency.
 * @param {string} message
 */
function getCurrencyAmountRegex(message) {
  if (getMatch(message, /USD/)) {
    return /(USD)[\s]?(.+?(?=\.))/;
  }

  return /(\$)(.+?(?=\.(?!\d)))/;
}

/**
 * Parses a bci email. Example format
 * Estimado(a) Cliente: Informamos a usted que el 27/12/2018 a las 21:34 hrs.
 * se ha realizado una COMPRA INTERNACIONAL en STEAMGAMES.COM 425-952-2985 DE
 * con su Tarjeta de Credito terminada en 2041 por USD 1,97.
 * @param {string} body - The complete email info
 * @returns {object} amount, commerce, type, currency, etc
 */
module.exports = function parseEmail(body = '') {
  console.log('Parsing email...');
  // Si necesita... is the footer
  const messageRegex = /Estimado[\S,\s]*?(?=Si necesita)/;
  const message = getMatch(body, messageRegex);
  console.log(`Extracted: ${message}`);

  const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/;
  const date = getMatch(message, dateRegex);

  const timeRegex = /(\d{1,2}:\d{1,2}) hrs/;
  const [, time] = getMatch(message, timeRegex, true);

  const purchaseTypeRegex = /COMPRA.+?(?= )/;
  const purchaseType = getMatch(message, purchaseTypeRegex);

  const commerceRegex = /en ([\S,\s]*?)(?=con su)/;
  const [, commerce] = getMatch(message, commerceRegex, true);

  const cardRegex = /Tarjeta de Credito.+?(\d{4})/;
  const [, cardNumber] = getMatch(message, cardRegex, true);

  const currencyAmountRegex = getCurrencyAmountRegex(message);
  const [, currency, amount] = getMatch(message, currencyAmountRegex, true);

  return {
    date,
    time,
    purchaseType,
    commerce,
    cardNumber,
    currency,
    amount,
  };
};
