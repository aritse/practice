// iven a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    switch (numRows) {
        case 0: return [];
        case 1: return [[1]];
        case 2: return [[1], [1, 1]];
    }
    const pascal = [[1], [1, 1]];
    for (let i = 2; i < numRows; i++) {
        const row = [1];
        for (let j = 0; j < pascal[i - 1].length - 1; j++) {
            row.push(pascal[i - 1][j] + pascal[i - 1][j + 1]);
        }
        row.push(1);
        pascal.push(row);
    }
    return pascal;
};

/* Solution that I found online. Cool */

// This takes advantage of the fact that each row can be calculated by the offset sum of the previous row.
//       1 2 1 0
//     + 0 1 2 1
//       -------
//       1 3 3 1
// I realize it's probably not the most well-optimized, but hopefully this will help somebody as a springboard to a better JavaScript implementation using this concept.

// function calculatePascal(numRows) {
//     if (!numRows) return [];

//     const pascal = [[1]];
//     for (let i = 1; i < numRows; i++) {
//         const prevRow = pascal[pascal.length - 1];
//         const shiftLeft = [...prevRow, 0];
//         const shiftRight = [0, ...prevRow];
//         const currentRow = shiftLeft.map((r, i) => r + shiftRight[i]);
//         pascal.push(currentRow);
//     }
//     return pascal;
// }