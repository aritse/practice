/*
PROBLEM DESCRIPTION
According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

Example:

Input: 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output: 
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
Follow up:

Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    const [rows, cols] = [board.length, board[0].length];
    var getNeighbors = function (r, c) {
        let neighbors = 0;
        for (let i = r - 1; i <= r + 1; i++)
            for (let j = c - 1; j <= c + 1; j++)
                if (i >= 0 && i < rows && j >= 0 && j < cols)
                    neighbors += board[i][j] & 1;
        neighbors -= board[r][c] & 1;
        return neighbors;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const neighbors = getNeighbors(i, j);
            if (board[i][j] === 1 && neighbors >= 2 && neighbors <= 3) board[i][j] = 3;
            if (board[i][j] === 0 && neighbors === 3) board[i][j] = 2;
        }
    }

    for (let i = 0; i < rows; i++)
        for (let j = 0; j < cols; j++)
            board[i][j] >>= 1;
};
