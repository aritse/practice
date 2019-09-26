// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
    const sign = x < 0 ? -1 : +1;
    const digits = Math.abs(x).toString().split('');

    let [i, j] = [0, digits.length - 1];
    while (i < j) [digits[i++], digits[j--]] = [digits[j], digits[i]];

    const y = sign * parseInt(digits.join(''));
    return y < -(2 ** 31) || y >= 2 ** 31 ? 0 : y;
};

console.log(reverse(-123456));
console.log(reverse(123456));
console.log(reverse(1234567));
console.log(reverse(1534236469));

/*
Questions to ask and assumptions to consider:
1. What if the integer ends with 1 or more zeroes? Remove zeroes.
2. What if the reversed integer overflows? Return 0.
*/