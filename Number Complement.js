/* Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.*/

/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function (num) {
  const s = num.toString(2);
  const complement = s.split("").map((bit) => (bit === "0" ? 1 : 0));
  return parseInt(complement.join(""), 2);
};
