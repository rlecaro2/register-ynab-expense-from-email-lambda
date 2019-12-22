import parseEmail from '../parse-email';

test('National purchase', () => {
  // eslint-disable-next-line max-len
  const email = `Estimado(a) Cliente: Informamos a usted que el 29/10/2019 a las 13:14 hrs. se ha realizado una compra en UNIMARC LOS TRAPENSES SANTIAGO 083CL con su Tarjeta de Credito terminada en 2041 por $10.822.

  Si necesita más información, contáctenos a
  través de su sitio web www.bci.cl, Menú "Servicio al Cliente".`;

  const { date, time, purchaseType, commerce, cardNumber, currency, amount } = parseEmail(email);

  expect(date).toBe('29/10/2019');
  expect(time).toBe('13:14');
  expect(purchaseType).toBe('');
  expect(commerce).toBe('UNIMARC LOS TRAPENSES SANTIAGO 083CL ');
  expect(cardNumber).toBe('2041');
  expect(currency).toBe('$');
  expect(amount).toBe('10.822');
});

test('Extracts all incoming fields', () => {
  // eslint-disable-next-line max-len
  const email = `Estimado(a) Cliente: Informamos a usted que el 29/10/2019 a las 13:14 hrs. se ha realizado una compra en UNIMARC LOS TRAPENSES SANTIAGO 083CL con su Tarjeta de Credito terminada en 2041 por $10.822.

  Si necesita más información, contáctenos a
  través de su sitio web www.bci.cl, Menú "Servicio al Cliente".`;

  const { date, time, purchaseType, commerce, cardNumber, currency, amount } = parseEmail(email);

  expect(date).toBe('29/10/2019');
  expect(time).toBe('13:14');
  expect(purchaseType).toBe('');
  expect(commerce).toBe('UNIMARC LOS TRAPENSES SANTIAGO 083CL ');
  expect(cardNumber).toBe('2041');
  expect(currency).toBe('$');
  expect(amount).toBe('10.822');
});
