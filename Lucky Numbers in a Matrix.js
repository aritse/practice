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
const luckyNumbers = matrix => {
  const [m, n] = [matrix.length, matrix[0].length];
  const luckNumbers = [];

  const minIndices = [];
  for (let i = 0; i < m; i++) {
    let min = Infinity;
    for (let j = 0; j < n; j++)
      if (matrix[i][j] < min) {
        minIndices[i] = [i, j];
        min = matrix[i][j];
      }
  }

  const maxIndices = [];
  for (let j = 0; j < n; j++) {
    let max = -Infinity;
    for (let i = 0; i < m; i++)
      if (matrix[i][j] > max) {
        maxIndices[j] = [i, j];
        max = matrix[i][j];
      }
  }

  minIndices.forEach(([i, j]) => {
    maxIndices.forEach(([x, y]) => {
      if (i === x && j === y) luckNumbers.push(matrix[i][j]);
    });
  });

  return luckNumbers;
};

console.log(
  luckyNumbers([
    [20, 21, 22, 23],
    [11, 9, 13, 7],
    [18, 16, 17, 2]
  ])
);
