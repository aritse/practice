/* DESCRIPTION
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.
A straight forward solution using O(mn) space is probably a bad idea. A simple improvement uses
O(m + n) space, but still not the best solution. Could you devise a constant space solution? */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const [m, n] = [matrix.length, matrix[0].length];

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (matrix[row][col] === 0) {
                for (let i = 0; i < m; i++)
                    if (matrix[i][col] !== 0)
                        matrix[i][col] = 0.5;
                for (let i = 0; i < n; i++)
                    if (matrix[row][i] !== 0)
                        matrix[row][i] = 0.5;
            }
        }
    }

    for (let row = 0; row < m; row++)
        for (let col = 0; col < n; col++)
            matrix[row][col] = Math.floor(matrix[row][col]);

    return matrix;
};

// Driver
const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];
console.log(setZeroes(matrix)); // Expected: [ [ 1, 0, 1 ], [ 0, 0, 0 ], [ 1, 0, 1 ] ]

const matrix2 = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
];
console.log(setZeroes(matrix2)); // Expected: [ [ 0, 0, 0, 0 ], [ 0, 4, 5, 0 ], [ 0, 3, 1, 0 ] ]

const matrix3 = [
    [0, 0, 0, 5],
    [4, 3, 1, 4],
    [0, 1, 1, 4],
    [1, 2, 1, 3],
    [0, 0, 1, 1]
];
console.log(setZeroes(matrix3));
/* Expected: [
    [*, *, ., *],
    [*, *, 1, 4],
    [., *, 1, 4],
    [*, *, 1, 3],
    [., ., 1, 1]
] */

/* QUESTIONS
Are the elements integers, double, characters and symbols? */