/* Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

 

Example 1:

Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
Output: [15]
Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column
Example 2:

Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
Output: [12]
Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
Example 3:

Input: matrix = [[7,8],[1,2]]
Output: [7]
 

Constraints:

m == mat.length
n == mat[i].length
1 <= n, m <= 50
1 <= matrix[i][j] <= 10^5.
All elements in the matrix are distinct. */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers = function(matrix) {
  const nums = [];
  const [n, m] = [matrix.length, matrix[0].length];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const el = matrix[i][j];
      let ok = true;
      for (let k = 0; k < m; k++) if (matrix[i][k] < el) ok = false;
      for (let k = 0; k < n; k++) if (matrix[k][j] > el) ok = false;
      if (ok) nums.push(el);
    }
  }
  return nums;
};

console.log(
  luckyNumbers([
    [20, 21, 22, 23],
    [11, 9, 13, 7],
    [18, 16, 17, 2]
  ])
);
