// formatters.js

/**
 * Formats a date object into a human-readable string.
 * @param {Date} date - The date to format.
 * @returns {string} - A string representing the formatted date.
 */
function formatDate(date) {
  if (!(date instanceof Date)) {
    return '';
  }
  let day = date.getDate().toString().padStart(2, '0');
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

/**
 * Formats a hex color code to include a hash if not present.
 * @param {string} color - The hex color code to format.
 * @returns {string} - A string representing the formatted hex color code.
 */
function formatHexColor(color) {
  if (!color.startsWith('#')) {
    return `#${color}`;
  }
  return color;
}

/**
 * Formats a number to a string with leading zeros based on a given length.
 * @param {number} number - The number to format.
 * @param {number} length - The desired length of the string.
 * @returns {string} - A string representing the formatted number.
 */
function formatNumberWithLeadingZeros(number, length) {
  return number.toString().padStart(length, '0');
}

/**
 * Formats a string to title case, capitalizing the first letter of each word.
 * @param {string} str - The string to format.
 * @returns {string} - A string in title case.
 */
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export { formatDate, formatHexColor, formatNumberWithLeadingZeros, toTitleCase };