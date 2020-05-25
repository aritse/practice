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
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
const minDistance = (A, B) => {
    const [a, b] = [A.length, B.length];
    const dp = Array.from(Array(b + 1), () => Array(a + 1).fill(0));

    for (let i = 1; i <= a; i++) dp[0][i] = 1 + dp[0][i - 1]; // A is null
    for (let i = 1; i <= b; i++) dp[i][0] = 1 + dp[i - 1][0]; // B is null

    for (let i = 1; i <= b; i++)
        for (let j = 1; j <= a; j++)
            dp[i][j] =
                A[j - 1] === B[i - 1]
                    ? dp[i - 1][j - 1]
                    : Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) +
                      1;
    return dp[b][a];
};

const [A, B] = ["Ari is broke", "Ari is rich"];
console.log(minDistance(A, B));
