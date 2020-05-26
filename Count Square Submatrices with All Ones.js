/** Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

 

Example 1:

Input: matrix =
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
Output: 15
Explanation: 
There are 10 squares of side 1.
There are 4 squares of side 2.
There is  1 square of side 3.
Total number of squares = 10 + 4 + 1 = 15.
Example 2:

Input: matrix = 
[
  [1,0,1],
  [1,1,0],
  [1,1,0]
]
Output: 7
Explanation: 
There are 6 squares of side 1.  
There is 1 square of side 2. 
Total number of squares = 6 + 1 = 7.
 

Constraints:

1 <= arr.length <= 300
1 <= arr[0].length <= 300
0 <= arr[i][j] <= 1 */

/**
 * @param {number[][]} M
 * @return {number}
 */
function countSquares(M) {
    const [m, n] = [M.length, M[0].length];

    // Each cell in dp tells us the number of square submatrices that have the cell as the bottom right corner
    const dp = Array.from(Array(m), () => Array(n).fill(0));

    // base case
    for (let i = 0; i < m; i++) dp[i][0] = M[i][0];
    for (let i = 0; i < n; i++) dp[0][i] = M[0][i];

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (M[i][j]) {
                dp[i][j] =
                    1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    let ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            ans += dp[i][j];
        }
    }
    return ans;
}
