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
var numSquares = function (n) {
    let result = 10000;
    var helper = function (n) {
        if (n === 0) return 0;
        if (n === 1) return 1;

        let max = Math.floor(Math.sqrt(n));
        for (let i = max; i > 0; i--)
            result = Math.min(result, 1 + helper(n - i * i));
        return result;
    };
    result = helper(n);
    return result;
}
