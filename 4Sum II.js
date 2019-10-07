// Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.

// To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of -228 to 228 - 1 and the result is guaranteed to be at most 231 - 1.

// Example:

// Input:
// A = [ 1, 2]
// B = [-2,-1]
// C = [-1, 2]
// D = [ 0, 2]

// Output:
// 2

// Explanation:
// The two tuples are:
// 1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
// 2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
    const len = A.length;
    const AB = Array.from(Array(len), () => new Array(len));
    const CD = Array.from(Array(len), () => new Array(len));
    let tuples = 0;
    for (let i = 0; i < len; i++)
        for (let j = 0; j < len; j++)
            AB[i][j] = A[i] + B[j];
    for (let i = 0; i < len; i++)
        for (let j = 0; j < len; j++)
            CD[i][j] = C[i] + D[j];
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            for (let k = 0; k < len; k++) {
                for (let l = 0; l < len; l++) {
                    if (AB[i][j] + CD[k][l] === 0) {
                        tuples++;
                    }
                }
            }
        }
    }
    return tuples;
};

console.log(fourSumCount([-1, -1], [-1, 1], [-1, 1], [1, -1]));

/*
Questions & assumptions:
Can one or more lists be empty? Yes. All lists are of the same length.
Duplicate values allowed? Yes, duplicate values are allowed.
Sparse or dense array? The lists can be sparse or dense.
Range of values? List elements are in the range of [-2^28 .. 2^28 - 1]
Signed or unsigned? The list elements have to be signed.
How many bits to represent an integer? We can assum 28 bits by looking at the range above.
Are the lists same or diff lengths? To make the problem easier, the lengths are the same.
    Later, I can try diff lengths.
How big is the length? The length is between [0 .. 500]
Is there any constraint on the time and space complexities? For now, there is no constrant.
    Later, I can optimize the solution.
*/

/* Approach 1 - Brute force
Iterate over each element of every list to find a tuple. With 2 lists, the time complexity is n squared.
With 4 lists, the running time is n^4. Can we do better?
*/