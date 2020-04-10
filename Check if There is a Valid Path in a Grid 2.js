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
function hasValidPath(grid) {
  const isOutOfBound = (row, col) => row < 0 || row > m - 1 || col < 0 || col > n - 1;
  function backtrack(previous, direction, [row, col]) {
    if (isOutOfBound(row, col)) return false;

    const current = grid[row][col];
    if (streets[previous][direction].includes(current) !== true) return false;
    if (row === m - 1 && col === n - 1) return true;

    grid[row][col] = 0;

    for (let i = 0; i < 4; i++) {
      if (backtrack(current, directions[i], [row + offsets[i][0], col + offsets[i][1]])) {
        return true;
      }
    }

    grid[row][col] = current;
    return false;
  }

  const directions = ["north", "east", "west", "south"];

  const offsets = [
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 0],
  ];

  const streets = [
    {}, // 0
    { north: [], east: [1, 3, 5], west: [1, 4, 6], south: [] }, // 1
    { north: [2, 3, 4], east: [], west: [], south: [2, 5, 6] }, // 2
    { north: [], east: [], west: [1, 4, 6], south: [2, 5, 6] }, // 3
    { north: [], east: [1, 3, 5], west: [], south: [2, 5, 6] }, // 4
    { north: [2, 3, 4], east: [], west: [1, 4, 6], south: [] }, // 5
    { north: [2, 3, 4], east: [1, 3, 5], west: [], south: [] }, // 6
  ];

  const [m, n] = [grid.length, grid[0].length];
  const start = grid[0][0];
  return (m === 1 && n === 1) || backtrack(start, "east", [0, 1]) || backtrack(start, "south", [1, 0]);
}

console.log(
  hasValidPath([
    [2, 4, 3],
    [6, 5, 2],
  ])
); // true

console.log(
  hasValidPath([
    [1, 2, 1],
    [1, 2, 1],
  ])
); // false

console.log(hasValidPath([[1, 1, 2]])); // false

console.log(hasValidPath([[1, 1, 1, 1, 1, 1, 3]])); // true

console.log(hasValidPath([[2], [2], [2], [2], [2], [2], [6]])); // true

console.log(hasValidPath([[1]])); // true

console.log(
  hasValidPath([
    [2, 3, 6, 5, 6, 1, 6, 6],
    [5, 6, 3, 5, 1, 5, 4, 2],
    [5, 3, 6, 1, 4, 1, 6, 3],
    [2, 2, 4, 2, 5, 6, 2, 3],
    [2, 2, 2, 4, 6, 2, 4, 5],
    [1, 6, 5, 6, 4, 2, 4, 6],
    [2, 2, 6, 5, 1, 3, 6, 6],
    [6, 5, 2, 3, 2, 3, 2, 6],
    [2, 2, 3, 3, 3, 3, 6, 1],
    [5, 3, 3, 2, 2, 2, 1, 1],
  ])
); // false
