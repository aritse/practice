/*
Given two strings s and t , write a function to determine if t is an anagram of s.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length != t.length) {
    return false;
  }
  s = Array.from(s).sort();
  t = Array.from(t).sort();
  for (i in s) {
    if (s[i] != t[i]) {
      return false;
    }
  }
  return true;
};

var s = "rat";
var t = "car";
console.log(isAnagram(s, t));
