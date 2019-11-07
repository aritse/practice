/* DESCRIPTION
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.
*/

var searchMatrix = function (matrix, target) {
    if (matrix.length === 0) return false;
    let row, col;
    for (row = matrix.length - 1; row >= 0; row--)
        if (matrix[row][0] <= target)
            break;
    for (col = matrix[0].length - 1; col >= 0; col--)
        if (matrix[0][col] <= target)
            break;

    for (let i = row; i >= 0; i--)
        for (let j = col; j >= 0; j--)
            if (matrix[i][j] === target)
                return true;
    return false;
};

const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]
console.log(searchMatrix(matrix, 45));
console.log(searchMatrix(matrix, 16));

/* QUESTIONS, ASSUMPTIONS, CLARIFICATIONS
What is an efficient algorithm? Time or space? or something else?
Are duplicates allowed?
Single row or single column or empty matrix allowed?
*/