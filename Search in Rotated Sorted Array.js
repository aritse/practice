/** Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n). */

function findPivot(nums) {
  let [left, right] = [0, nums.length - 1];
  while (right - left > 1) {
    const mid = ((left + right) / 2) | 0;
    if (nums[mid] < nums[right]) right = mid;
    else left = mid;
  }
  return nums[left] < nums[right] ? left : right;
}

function helper(nums, target, left, right) {
  while (left <= right) {
    const mid = ((left + right) / 2) | 0;
    if (nums[mid] === target) return mid;
    if (target < nums[mid]) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const pivot = findPivot(nums);
  const index = helper(nums, target, 0, pivot - 1);
  return index > -1 ? index : helper(nums, target, pivot, nums.length - 1);
};
