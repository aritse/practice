/*
In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

 

Example 1:



Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Note:

1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] is only 0, 1, or 2.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  // pad grid with 0
  grid.unshift(Array(grid[0].length).fill(0));
  grid.push(Array(grid[0].length).fill(0));
  for (let row of grid) {
    row.unshift(0);
    row.push(0);
  }
  const [rows, cols] = [grid.length, grid[0].length];

  // count fresh oranges
  let freshCount = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) freshCount++;
    }
  }
  if (freshCount === 0) return 0;

  // make a pass every minute
  let minutesElapsed = 0;
  while (freshCount) {
    // mark adjacent fresh oranges as rotting (=3)
    for (let i = 1; i < rows - 1; i++) {
      for (let j = 1; j < cols - 1; j++) {
        if (grid[i][j] === 2) {
          grid[i - 1][j] = grid[i - 1][j] ? grid[i - 1][j] | 2 : 0;
          grid[i + 1][j] = grid[i + 1][j] ? grid[i + 1][j] | 2 : 0;
          grid[i][j - 1] = grid[i][j - 1] ? grid[i][j - 1] | 2 : 0;
          grid[i][j + 1] = grid[i][j + 1] ? grid[i][j + 1] | 2 : 0;
        }
      }
    }

    // mark rotting oranges as rotten
    let rotting = 0;
    for (let i = 1; i < rows - 1; i++) {
      for (let j = 1; j < cols - 1; j++) {
        if (grid[i][j] === 3) {
          rotting++;
          grid[i][j] = 2;
          freshCount--;
        }
      }
    }

    if (rotting === 0) return -1;

    minutesElapsed++;
  }

  return minutesElapsed;
};
