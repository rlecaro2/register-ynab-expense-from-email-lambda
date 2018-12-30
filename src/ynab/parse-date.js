const { DateTime } = require('luxon');

/**
 *
 * @param {object} args
 * @param {string} args.date eg: 27/12/2018
 * @param {string} args.time  eg: 21:34
 */
module.exports = function parseDate({ date, time }) {
  const formatted = DateTime
    .fromFormat(
      `${date} ${time}`,
      'dd/MM/yyyy HH:mm',
      { zone: 'America/Santiago' },
    )
    .toUTC()
    .toISO();

  return formatted;
};
