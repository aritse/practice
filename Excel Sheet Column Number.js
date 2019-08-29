// Given a column title as appear in an Excel sheet, return its corresponding column number.

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  n = 0;
  for (let i = 0; i < s.length; i++) n = n * 26 + (s.charCodeAt(i) - 64);
  return n;
};
