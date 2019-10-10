// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// Example 2:

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const s = matrix.length - 1;
    for (let i = 0; i < matrix.length / 2; i++)
        for (let j = 0; j < (matrix.length - 1) / 2; j++)
            [matrix[i][j], matrix[s - j][i], matrix[s - i][s - j], matrix[j][s - i]] = [matrix[s - j][i], matrix[s - i][s - j], matrix[j][s - i], matrix[i][j]];
};

// Solution found online pretty cool

const rotate = function (matrix) {
    // 1. Reverse the matrix
    matrix = matrix.reverse();
    // 2. Transpose the matrix
    for (let i in matrix)
        for (let j = 0; j < i; j++) [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
}

/*
Questions and assumptions
Can the matrix be empty? Yes, the matrix can be empty.
What is the maximum size of n? You can assume that the size is not
    big enough to worry overflow. It can be odd or even.
What type of a matrix is it (identity, binary, signed, diagonal etc)?
    It is a positive matrix with no pattern.
What is the maximum and minimum values of the matrix elements?
    The values are positive and not large enough to worry about overflow.
Do I rotate the matrix in place? Yes, you need to modify it in place and
    do not allocate extra 2D matrix. But I can allocate 1D matrix.

Are there any time and space complexity constraints? No, there is no constraint.
    Try to achieve the best time and space complexity.
*/