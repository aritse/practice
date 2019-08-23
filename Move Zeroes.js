// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

/* My solution */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  avail = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[avail++] = nums[i];
    }
  }
  for (i = avail; i < nums.length; i++) {
    nums[i] = 0;
  }
};
