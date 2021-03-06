// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: [-1,-100,3,99] and k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
// Note:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length;
    const deleted = nums.splice(0, nums.length - k);
    nums.push(...deleted);
};

// In-place solution with O(1) extra space with O(n * k) time complexity 
var rotate = function (nums, k) {
    k = k % nums.length;
    while (k--) {
        const last = nums[nums.length - 1];
        for (let i = nums.length - 1; i > 0; i--)
            nums[i] = nums[i - 1];
        nums[0] = last;
    }
};

/*
Questins and assumptions:
1. What is the dimension of an array? One-dimension
2. Is empty array valid?
3. What is the maximum length of the array?
4. Are there duplicates?
5. Can k be 0?
6. Can k be more than the length of the array?
7. Can the array be modified?
8. In-place desired?
*/


/*
Solution that I found online that is simple and short
*/
// var rotate = function (nums, k) {
//     for (let i = 0; i < k; i++)
//         nums.unshift(nums.pop());
// };
