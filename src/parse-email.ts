function getMatch(message: string, regex: RegExp): string {
  console.log(regex);
  const maybeValue = message.match(regex);
  console.log(maybeValue);
  return maybeValue ? maybeValue[0] : '';
}

function getFullMatch(message: string, regex: RegExp): RegExpMatchArray {
  const maybeValue = message.match(regex);
  return maybeValue || [];
}

/**
 * Returns the appropiate regex for amount and currency.
 * @param {string} message
 */
function getCurrencyAmountRegex(message: string): RegExp {
  if (getMatch(message, /USD/)) {
    return /(USD)[\s]?(.+?(?=\.))/;
  }

  return /(\$)(.+?(?=\.(?!\d)))/;
}

export interface EmailInfo {
  date: string;
  time: string;
  purchaseType: string;
  commerce: string;
  cardNumber: string;
  currency: string;
  amount: string;
}

/**
 * Parses a bci email. Example format
 * Estimado(a) Cliente: Informamos a usted que el 27/12/2018 a las 21:34 hrs.
 * se ha realizado una COMPRA INTERNACIONAL en STEAMGAMES.COM 425-952-2985 DE
 * con su Tarjeta de Credito terminada en 2041 por USD 1,97.
 */
export default function parseEmail(body = ''): EmailInfo {
  const importantStart = 'Informamos a usted';

  const messageRegex = `${importantStart}[\S,\s]*?(?=\<)`;
  const message = getMatch(body, new RegExp(messageRegex, 'gmi'));

  console.log('message', message);
  if (!message) throw new Error('fuck');

  const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/;
  const date = getMatch(message, dateRegex);

  const timeRegex = /(\d{1,2}:\d{1,2}) hrs/;
  const [, time] = getFullMatch(message, timeRegex);

  const purchaseTypeRegex = /COMPRA.+?(?= )/;
  const purchaseType = getMatch(message, purchaseTypeRegex);

  const commerceRegex = /en ([\S,\s]*?)(?=con su)/;
  const [, commerce] = getFullMatch(message, commerceRegex);

  const cardRegex = /Tarjeta de Credito.+?(\d{4})/;
  const [, cardNumber] = getFullMatch(message, cardRegex);

  const currencyAmountRegex = getCurrencyAmountRegex(message);
  const [, currency, amount] = getFullMatch(message, currencyAmountRegex);

  return {
    date,
    time,
    purchaseType,
    commerce,
    cardNumber,
    currency,
    amount,
  };
}
