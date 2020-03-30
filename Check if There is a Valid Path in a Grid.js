/**Given a m x n grid. Each cell of the grid represents a street. The street of grid[i][j] can be:
1 which means a street connecting the left cell and the right cell.
2 which means a street connecting the upper cell and the lower cell.
3 which means a street connecting the left cell and the lower cell.
4 which means a street connecting the right cell and the lower cell.
5 which means a street connecting the left cell and the upper cell.
6 which means a street connecting the right cell and the upper cell.


You will initially start at the street of the upper-left cell (0,0). A valid path in the grid is a path which starts from the upper left cell (0,0) and ends at the bottom-right cell (m - 1, n - 1). The path should only follow the streets.

Notice that you are not allowed to change any street.

Return true if there is a valid path in the grid or false otherwise.

 

Example 1:


Input: grid = [[2,4,3],[6,5,2]]
Output: true
Explanation: As shown you can start at cell (0, 0) and visit all the cells of the grid to reach (m - 1, n - 1).
Example 2:


Input: grid = [[1,2,1],[1,2,1]]
Output: false
Explanation: As shown you the street at cell (0, 0) is not connected with any street of any other cell and you will get stuck at cell (0, 0)
Example 3:

Input: grid = [[1,1,2]]
Output: false
Explanation: You will get stuck at cell (0, 1) and you cannot reach cell (0, 2).
Example 4:

Input: grid = [[1,1,1,1,1,1,3]]
Output: true
Example 5:

Input: grid = [[2],[2],[2],[2],[2],[2],[6]]
Output: true
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
1 <= grid[i][j] <= 6 */

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
  const getNextStreet = (i, j, street) => {
    switch (street) {
      case 1:
        if (j - 1 >= 0) {
          if (visited[i][j - 1] === false) {
            if ([1, 4, 6].includes(grid[i][j - 1])) {
              return [i, j - 1, grid[i][j - 1]];
            }
          }
        }
        if (j + 1 < n) {
          if (visited[i][j + 1] === false) {
            if ([1, 3, 5].includes(grid[i][j + 1])) {
              return [i, j + 1, grid[i][j + 1]];
            }
          }
        }
        return [-1, -1, 0];
      case 2:
        if (i - 1 >= 0) {
          if (visited[i - 1][j] === false) {
            if ([2, 3, 4].includes(grid[i - 1][j])) {
              return [i - 1, j, grid[i - 1][j]];
            }
          }
        }
        if (i + 1 < m) {
          if (visited[i + 1][j] === false) {
            if ([2, 5, 6].includes(grid[i + 1][j])) {
              return [i + 1, j, grid[i + 1][j]];
            }
          }
        }
        return [-1, -1, 0];
      case 3:
        if (j - 1 >= 0) {
          if (visited[i][j - 1] === false) {
            if ([1, 4, 6].includes(grid[i][j - 1])) {
              return [i, j - 1, grid[i][j - 1]];
            }
          }
        }
        if (i + 1 < m) {
          if (visited[i + 1][j] === false) {
            if ([2, 5, 6].includes(grid[i + 1][j])) {
              return [i + 1, j, grid[i + 1][j]];
            }
          }
        }
        return [-1, -1, 0];
      case 4:
        if (j + 1 < n) {
          if (visited[i][j + 1] === false) {
            if ([1, 3, 5].includes(grid[i][j + 1])) {
              return [i, j + 1, grid[i][j + 1]];
            }
          }
        }
        if (i + 1 < m) {
          if (visited[i + 1][j] === false) {
            if ([2, 5, 6].includes(grid[i + 1][j])) {
              return [i + 1, j, grid[i + 1][j]];
            }
          }
        }
        return [-1, -1, 0];
      case 5:
        if (j - 1 >= 0) {
          if (visited[i][j - 1] === false) {
            if ([1, 4, 6].includes(grid[i][j - 1])) {
              return [i, j - 1, grid[i][j - 1]];
            }
          }
        }
        if (i - 1 >= 0) {
          if (visited[i - 1][j] === false) {
            if ([2, 3, 4].includes(grid[i - 1][j])) {
              return [i - 1, j, grid[i - 1][j]];
            }
          }
        }
        return [-1, -1, 0];
      case 6:
        if (j + 1 < n) {
          if (visited[i][j + 1] === false) {
            if ([1, 3, 5].includes(grid[i][j + 1])) {
              return [i, j + 1, grid[i][j + 1]];
            }
          }
        }
        if (i - 1 >= 0) {
          if (visited[i - 1][j] === false) {
            if ([2, 3, 4].includes(grid[i - 1][j])) {
              return [i - 1, j, grid[i - 1][j]];
            }
          }
        }
        return [-1, -1, 0];
    }
  };

  const followStreets = (i, j, street) => {
    if (i === m - 1 && j === n - 1) return true;
    visited[i][j] = true;
    [i, j, street] = getNextStreet(i, j, street);
    if (street === 0) return false;
    console.log(i, j, street);

    return followStreets(i, j, street);
  };

  const [m, n] = [grid.length, grid[0].length];
  const visited = Array.from(Array(m), () => Array(n).fill(false));

  return followStreets(0, 0, grid[0][0]);
};

console.log(
  hasValidPath([
    [2, 4, 3],
    [6, 5, 2]
  ])
);
