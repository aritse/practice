// Given an integer n, return the number of trailing zeroes in n!.

// Example 1:

// Input: 3
// Output: 0
// Explanation: 3! = 6, no trailing zero.
// Example 2:

// Input: 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.
// Note: Your solution should be in logarithmic time complexity.

/**
 * @param {number} n
 * @return {number}
 */

/*
Honestly, it is not a trivial problem as it was indicated on leetcode.
It's more mathematical than programmatical. The problem was explained in 
greater detail at https://brilliant.org/wiki/trailing-number-of-zeros/
*/

/*
Solution that I found online. Reference
https://leetcode.com/problems/factorial-trailing-zeroes/discuss/52371/My-one-line-solutions-in-3-languages
*/

var trailingZeroes = function (n) {
    return n === 0 ? 0 : Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5));
};