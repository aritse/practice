/** Given a circular array C of integers represented by A, find the maximum possible sum of a non-empty subarray of C.

Here, a circular array means the end of the array connects to the beginning of the array.  (Formally, C[i] = A[i] when 0 <= i < A.length, and C[i+A.length] = C[i] when i >= 0.)

Also, a subarray may only include each element of the fixed buffer A at most once.  (Formally, for a subarray C[i], C[i+1], ..., C[j], there does not exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.) */

/**
 * @param {number[]} A
 * @return {number}
 */
/**
 * @param {number[]} A
 * @return {number}
 */
function maxSubarraySumCircular(A) {
    // case 1: subarray without wrapping
    const maxSumA = kadane(A);

    // case 2: subarray with wrapping
    const I = A.map((a) => -a);
    const sum = I.reduce((s, a) => s + a, 0);
    const maxElement = Math.max(...A);
    const maxSumI = maxElement < 0 ? maxElement : -(sum - kadane(I));

    // return max of case 1 and case 2
    return Math.max(maxSumI, maxSumA);
}

function kadane(arr) {
    const dp = Array(arr.length);
    dp[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);
    }
    return Math.max(...dp);
}
