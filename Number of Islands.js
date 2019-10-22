/*
PROBLEM DESCRIPTION
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

var padWithZeros = function (grid) {
    const [rows, cols] = [2 + grid.length, 2 + grid[0].length];
    const paddedGrid = [...Array(rows)].map(() => Array(cols).fill("0"));
    for (let i = 1; i < rows - 1; i++)
        for (let j = 1; j < cols - 1; j++)
            paddedGrid[i][j] = grid[i - 1][j - 1];
    return paddedGrid;
};

var numIslands = function (grid) {
    dfs = function (i, j) {
        if (grid[i][j] === "1") {
            grid[i][j] = "0";
            dfs(i - 1, j);
            dfs(i, j + 1);
            dfs(i + 1, j);
            dfs(i, j - 1);
        }
    };

    if (!grid.length) return 0;
    grid = padWithZeros(grid);
    const [rows, cols] = [grid.length, grid[0].length];
    var islands = 0;
    for (let i = 1; i < rows - 1; i++) {
        for (let j = 1; j < cols - 1; j++) {
            if (grid[i][j] === "1") {
                islands++;
                dfs(i, j);
            }
        }
    }
    return islands;
};

