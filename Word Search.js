/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
 

Constraints:

board and word consists only of lowercase and uppercase English letters.
1 <= board.length <= 200
1 <= board[i].length <= 200
1 <= word.length <= 10^3
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  const backtrack = (r, c, word) => {
    if (word === "") return true;
    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word.substring(0, 1)) return false;

    board[r][c] = "-";
    result =
      backtrack(r, c + 1, word.substring(1)) ||
      backtrack(r, c - 1, word.substring(1)) ||
      backtrack(r + 1, c, word.substring(1)) ||
      backtrack(r - 1, c, word.substring(1));

    board[r][c] = word.substring(0, 1);
    return result;
  };

  const [rows, cols] = [board.length, board[0].length];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (backtrack(r, c, word)) return true;
    }
  }
  return false;
};

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

console.log(exist(board, "ABCCED")); // true
console.log(exist(board, "SEE")); // true
console.log(exist(board, "ABCB")); // false
