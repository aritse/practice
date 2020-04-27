/** Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive. */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  let count = 0;
  while (m !== n) {
    m = m >> 1;
    n = n >> 1;
    count++;
  }
  return m << count;
};
