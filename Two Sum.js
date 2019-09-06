// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* My brute force solution with nested loops runtime O(n^2). */

// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     throw new Error("No two sum solution");
// };

/* Solution that found online. One-pass through nums */

var twoSum = function (nums, target) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hash[complement] !== undefined) return [hash[complement], i];
        hash[nums[i]] = i;
    }
    throw new Error("No two sum solution");
};