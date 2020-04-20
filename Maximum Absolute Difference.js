/** You are given an array of N integers, A1, A2 ,…, AN. Return maximum value of f(i, j) for all 1 ≤ i, j ≤ N.
f(i, j) is defined as |A[i] - A[j]| + |i - j|, where |x| denotes absolute value of x. */

module.exports = {
  maxArr: function (A) {
    let max = -Infinity;
    const n = A.length;
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        max = Math.max(max, Math.abs(A[i] - A[j]) + Math.abs(i - j));
      }
    }
    return max;
  },
};
