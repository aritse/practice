// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

/* My solution */

/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//   let dict = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (dict[nums[i]]) {
//       delete dict[nums[i]];
//     } else {
//       dict[nums[i]] = 1;
//     }
//   }
//   return Object.keys(dict);
// };

/* Solution that I found it cool */

var singleNumber = function(nums) {
  a = 0;
  nums.forEach(n => (a ^= n));
  return a;
};
