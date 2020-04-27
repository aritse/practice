/**Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

 

If there is no common subsequence, return 0.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
 

Constraints:

1 <= len1 <= 1000
1 <= len2 <= 1000
The input strings consist of lowercase English characters only. */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (t1, t2) {
  const [l1, l2] = [t1.length, t2.length];
  if (l1 < 1 || l2 < 1) return 0;

  const dp = Array.from(Array(l1 + 1), () => Array(l2 + 1).fill(undefined));

  // populate dp table with solutions to base / trivial subproblems
  for (let i = 0; i <= l1; i++) dp[i][0] = 0;
  for (let j = 0; j <= l2; j++) dp[0][j] = 0;

  // solve bottom up
  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      if (t1.charAt(i - 1) === t2.charAt(j - 1))
        dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }

  return dp[l1][l2];
};

const [text1, text2] = ["abcde", "ace"];
console.log(longestCommonSubsequence(text1, text2));
