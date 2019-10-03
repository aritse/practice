// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const len = nums.length;
    const [left, right, products] = [[], [], []];

    left[0] = 1;
    for (let i = 1; i < len; i++) left[i] = left[i - 1] * nums[i - 1];

    right[len - 1] = 1;
    for (let i = len - 1; i > 0; i--) right[i - 1] = right[i] * nums[i];

    for (let i = 0; i < len; i++) products[i] = left[i] * right[i];
    return products;
};

/*

Cool solution that I found online
*/

var productExceptSelf = function (nums) {
    const len = nums.length;
    const products = [];
    let productSoFar = 1;
    for (let i = 0; i < len; i++) {
        products[i] = productSoFar;
        productSoFar *= nums[i];
    }
    productSoFar = 1
    for (let j = len - 1; j >= 0; j--) {
        products[j] *= productSoFar;
        productSoFar *= nums[j];
    }
    return products;
};