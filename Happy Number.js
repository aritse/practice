// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Input: 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 */

/* My solution with timeout */

var isHappy = function(n) {
  let timeout = 0;
  while (timeout < 1000) {
    if (n === 1) return true;
    n = n
      .toString()
      .split("")
      .reduce((sos, d) => sos + d * d, 0);
    timeout++;
  }
  return false;
};

/* Solution that found online by keeping track of the sum in a set */

// var isHappy = function (n) {
//     let set = new Set();
//     while (n !== 1) {
//         n = n.toString().split('').reduce((sos, d) => sos + d * d, 0);
//         if (set.has(n)) return false;
//         set.add(n);
//     }
//     return true;
// };

var isHappy2 = function(n) {
  let i = 5000;
  while (n !== 1) {
    n = n
      .toString()
      .split("")
      .reduce((acc, d) => acc + d * d, 0);
    i--;
    if (!i) return false;
  }
  return true;
};
