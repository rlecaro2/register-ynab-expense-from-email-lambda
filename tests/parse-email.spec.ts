import parseEmail from '../src/parse-email';
import { text as bciNational } from './emails/bci-national';

describe('parse email', () => {
  it.only('national purchase', () => {
    expect.hasAssertions();

    const email = bciNational;

    const { date, time, purchaseType, commerce, cardNumber, currency, amount } = parseEmail(email);

    expect(date).toBe('18/01/2020');
    expect(time).toBe('19:33');
    expect(purchaseType).toBe('');
    expect(commerce).toBe('JUMBO ALTO LAS CONDES SANTIAGO     083CL ');
    expect(cardNumber).toBe('2041');
    expect(currency).toBe('$');
    expect(amount).toBe('12.278');
  });

  it('extracts all incoming fields', () => {
    expect.hasAssertions();

    const email = bciNational;
    const { date, time, purchaseType, commerce, cardNumber, currency, amount } = parseEmail(email);

    expect(date).toBe('18/01/2020');
    expect(time).toBe('19:33');
    expect(purchaseType).toBe('');
    expect(commerce).toBe('JUMBO ALTO LAS CONDES SANTIAGO     083CL ');
    expect(cardNumber).toBe('2041');
    expect(currency).toBe('$');
    expect(amount).toBe('12.278');
  });
});
