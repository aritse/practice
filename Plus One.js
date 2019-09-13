// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

/**
 * @param {number[]} digits
 * @return {number[]}
 */



var plusOne = function (digits) {
    let carry = 0;
    while (digits.length > 0) {
        let last = digits.length - 1;
        if (digits[last] === 9) {
            digits.pop();
            carry++;
        } else {
            digits[last]++;
            digits.push(...new Array(carry).fill(0));
            return digits;
        }
    }
    digits.push(1, ...new Array(carry).fill(0));
    return digits;
};


/** Solution found online */

var plusOne2 = function (digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
        if (++digits[i] > 9) digits[i] = 0;
        else return digits;
    }
    digits.unshift(1);
    return digits;
};