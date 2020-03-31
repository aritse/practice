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
const longestCommonSubsequence = (text1, text2) => {
  const solve = (text1, text2) => {
    // solutions to base subproblems
    for (let i = 0; i <= len1; i++) D[i][0] = 0;
    for (let i = 0; i <= len2; i++) D[0][i] = 0;

    // solve subproblems in bottom-up manner
    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
        D[i][j] = text1.charAt(i - 1) === text2.charAt(j - 1) ? D[i - 1][j - 1] + 1 : Math.max(D[i][j - 1], D[i - 1][j]);
      }
    }
  };

  const [len1, len2] = [text1.length, text2.length];
  const D = Array.from(Array(len1 + 1), () => Array(len2 + 1).fill(undefined));
  solve(text1, text2);
  return D[len1][len2];
};

const [text1, text2] = ["abcde", "ace"];
console.log(longestCommonSubsequence(text1, text2));
