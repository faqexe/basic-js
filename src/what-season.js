const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (isNaN(Date.parse(date)) && !(date instanceof Date)) {
    throw new Error("Invalid date!");
  }

  if (Object.getOwnPropertyNames(date).length !== 0) {
    throw Error("Invalid date!");
  }

  let month = date.getMonth() + 1;
  let getSeason;

  if (month >= 3 && month <= 5) {
    getSeason = "spring";
  } else if (month >= 6 && month <= 8) {
    getSeason = "summer";
  } else if (month >= 9 && month <= 11) {
    getSeason = "autumn";
  } else {
    getSeason = "winter";
  }
  return getSeason;
}

module.exports = {
  getSeason,
};
