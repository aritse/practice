/**Given a matrix of m * n elements (m rows, n columns), return all elements of the matrix in spiral order. */

module.exports = {
  spiralOrder: function (A) {
    const [rows, cols] = [A.length, A[0].length];
    const B = [];
    while (B.length < rows * cols) {
      // remove first row and copy
      if (A.length) {
        B.push(...A.shift());
      }

      // remove last column and copy
      for (let i = 0; i < A.length; i++) {
        if (A[i].length) {
          B.push(A[i].pop());
        }
      }

      // remove last row and copy
      if (A.length) {
        B.push(...A.pop().reverse());
      }

      // remove first column and copy
      for (let i = A.length - 1; i >= 0; --i) {
        if (A[i].length) {
          B.push(A[i].shift());
        }
      }
    }

    return B;
  },
};
