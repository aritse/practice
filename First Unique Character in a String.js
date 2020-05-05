// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */

/* My solution */

var firstUniqChar = function (s) {
  var dict = {};
  for (c of s) {
    if (dict[c]) dict[c]++;
    else dict[c] = 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]] === 1) return i;
  }
  return -1;
};

/* Solution that I found it online cool */
function firstUniqueChar(s) {
  for (i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
}
