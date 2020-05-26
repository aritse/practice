/** Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000. */

/**
 * @param {string} s
 * @return {number}
 */
function longestPalindromeSubseq(s) {
    const n = s.length;
    const dp = Array.from(Array(n), () => Array(n).fill(0));

    for (let i = 0; i < n; i++) dp[i][i] = 1;

    for (let len = 1; len < n; len++) {
        for (let i = 0; i + len < n; i++) {
            let j = i + len;
            dp[i][j] =
                s[i] === s[j]
                    ? 2 + dp[i + 1][j - 1]
                    : Math.max(dp[i + 1][j], dp[i][j - 1]);
        }
    }
    return dp[0][n - 1];
}
