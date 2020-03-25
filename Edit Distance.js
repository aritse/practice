/**Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character
Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u') */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = (word1, word2) => {
  const [len1, len2] = [word1.length, word2.length];
  const D = Array.from(Array(len2 + 1), () => Array(len1 + 1).fill(0));

  for (let i = 0; i <= len1; i++) D[0][i] = i;
  for (let i = 0; i <= len2; i++) D[i][0] = i;

  for (let i = 0; i < len2; i++) {
    const c2 = word2[i];
    for (let j = 0; j < len1; j++) {
      const c1 = word1[j];
      if (c1 === c2) {
        D[i + 1][j + 1] = D[i][j];
      } else {
        D[i + 1][j + 1] = Math.min(D[i][j], D[i + 1][j], D[i][j + 1]) + 1;
      }
    }
  }
  return D[len2][len1];
};

const [word1, word2] = ["benyam", "ephrem"];
console.log(word1, word2, minDistance(word1, word2));
