// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

/*
 Solution that I found online and that made more sense to me. It's intuitive. See the explanation below.
 */

var getSum = function(a, b) {
  if (b === 0) return a;
  return getSum(a ^ b, (a & b) * 2); // either works. Left shift is equal to multiplying by 2.
  // return getSum(a^b, (a&b)<<1);
};

/*
Explanation: Consider Venn diagram. a+b is the total area of a and b circles. This is can be represented by the sum of the following two components.
1. a^b is the total area of the sections of the circles that don't overlap.
2. a&b is the area of the overlapping section. We need to count the overlapping area twice.

When you 'and' two numbers, it becomes ever smaller. Thus, the overlapping area will continue to become smaller until 0. That's how, we converge to the base case.
*/
