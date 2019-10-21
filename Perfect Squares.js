/*
PROBLEM DESCRIPTION
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

Example 1:

Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
*/

/**
 * @param {number} n
 * @return {number}
 */
const squares = { 0: 0, 1: 1 };
var numSquares = function (n) {
    let min = Number.MAX_VALUE;
    for (let i = Math.floor(Math.sqrt(n)); i > 0; i--) {
        let remainder = n - i * i;
        min = Math.min(min, squares[remainder] + 1 || numSquares(remainder) + 1);
    }
    squares[n] = min;
    return squares[n];
}
