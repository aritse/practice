/*
Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Example:

matrix = [
   [ 1,  5,  9],
   [ 3, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.
Note:
You may assume k is always valid, 1 ≤ k ≤ n^2.
*/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    let sorted = [];
    matrix.forEach(row => sorted = merge(sorted, row));
    return sorted[k - 1];
}

var merge = function (A, B) {
    const C = [];
    for (let a = b = c = 0; c < A.length + B.length; c++) {
        if (a >= A.length) {
            C.push(...B.slice(b)); break;
        } else if (b >= B.length) {
            C.push(...A.slice(a)); break;
        } else C[c] = A[a] < B[b] ? A[a++] : B[b++];
    }
    return C;
}

const matrix = [
    [1, 5, 7],
    [3, 6, 8],
    [4, 6, 9]
];
let k = 3;
console.log(kthSmallest(matrix, k));
