/** Given a non-negative number represented as an array of digits,

add 1 to the number ( increment the number represented by the digits ).

The digits are stored such that the most significant digit is at the head of the list. */

module.exports = {
  plusOne: function (A) {
    // remove leading 0s
    let i = 0;
    while (A[i] === 0) i++;
    A.splice(0, i);

    for (let i = A.length - 1; i >= 0; --i) {
      A[i]++;
      if (A[i] === 10) A[i] = 0;
      else return A;
    }

    // case where 99 + 1 = 100
    A.splice(0, 0, 1);
    return A;
  },
};
