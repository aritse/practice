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

1 <= text1.length <= 1000
1 <= text2.length <= 1000
The input strings consist of lowercase English characters only. */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = (a, b) => {
  if (!a.length || !b.length) return 0;
  if (a.charAt(a.length - 1) === b.charAt(b.length - 1)) return 1 + longestCommonSubsequence(a.substring(0, a.length - 1), b.substring(0, b.length - 1));
  return Math.max(longestCommonSubsequence(a.substring(0, a.length - 1), b), longestCommonSubsequence(a, b.substring(0, b.length - 1)));
};

const [a, b] = ["abcde", "ace"];
console.log(longestCommonSubsequence(a, b));
