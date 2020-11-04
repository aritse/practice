function bfs(grid, i, j) {
  const inBound = (i, j) =>
    i >= 0 && i < grid.length && j >= 0 && j < grid[0].length;

  if (inBound(i, j) && grid[i][j] === "1") {
    grid[i][j] = "0";
    bfs(grid, i - 1, j);
    bfs(grid, i + 1, j);
    bfs(grid, i, j - 1);
    bfs(grid, i, j + 1);
  }
}

function numIslands(grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        bfs(grid, i, j);
      }
    }
  }
  return count;
}
