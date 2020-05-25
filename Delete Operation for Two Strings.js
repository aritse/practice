/** Given two words word1 and word2, find the minimum number of steps required to make word1 and word2 the same, where in each step you can delete one character in either string.

Example 1:
Input: "sea", "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
Note:
The length of given words won't exceed 500.
Characters in given words can only be lower-case letters. */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(A, B) {
    const [a, b] = [A.length, B.length];
    const dp = Array.from(Array(a + 1), () => Array(b + 1).fill(0));

    for (let i = 1; i <= a; i++) dp[i][0] = 1 + dp[i - 1][0];
    for (let i = 1; i <= b; i++) dp[0][i] = 1 + dp[0][i - 1];

    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= b; j++) {
            if (A[i - 1] === B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + 1;
            }
        }
    }
    return dp[a][b];
}
