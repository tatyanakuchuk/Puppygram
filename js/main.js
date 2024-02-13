/**
 * Return random integer numberin range from min to max.
 *
 * @param {number} min integer positive number.
 * @param {number} max integer positive number.
 * @return {number} random integer number in range from min to max.
 */

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

/**
 * Validate the length of string.
 *
 * @param {string} string, some text.
 * @param {number} maxLength - integer positive number.
 * @return {boolean} true if string less or equal maxLength or false if more than maxLength.
 */ 

const checkStringLength = (string, maxLength) => {
  return string.trim().length <= maxLength;
}


