/** You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

direction can be 0 (for left shift) or 1 (for right shift). 
amount is the amount by which string s is to be shifted.
A left shift by 1 means remove the first character of s and append it to the end.
Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
Return the final string after all operations. */

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
const stringShift = (s, shift) => {
  // aggregate all shifts into a single shift
  let net = shift.reduce((a, c) => (c[0] ? a - c[1] : a + c[1]), 0);
  net = net % s.length;

  const a = s.slice(0, net);
  const b = s.slice(net);
  return b.concat(a);
};
