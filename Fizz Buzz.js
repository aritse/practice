// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

/* My solution */

/**
 * @param {number} n
 * @return {string[]}
 */
// var fizzBuzz = function(n) {
//   a = [];
//   for (i = 1; i <= n; i++) {
//     if (i % 15 === 0) {
//       a.push("FizzBuzz");
//     } else if (i % 5 === 0) {
//       a.push("Buzz");
//     } else if (i % 3 === 0) {
//       a.push("Fizz");
//     } else {
//       a.push(i.toString());
//     }
//   }
//   return a;
// };

/* Solution that I found it cool */

var fizzBuzz = function(n) {
  return new Array(n).fill(0).map((a, i) => (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || "" + i);
};
