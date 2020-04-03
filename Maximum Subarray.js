// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest running_total and return its running_total.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest running_total = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */

/* My solution - If there is only one element in the array, that element is the largest. It evaluates each element. If it is more than the current max,
the current max is no longer relevant and the current element becomes the max. On each iteration, we update the largest with the current max.
*/

var maxSubArray = function(nums) {
  let largest = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(nums[i], nums[i] + max);
    if (max > largest) {
      largest = max;
    }
  }
  return largest;
};

const maxSubArray = nums => {
  const subproblems = Array.from(nums);
  for (let i = 1; i < nums.length; i++) subproblems[i] = Math.max(subproblems[i], subproblems[i - 1] + nums[i]);

  return Math.max(...subproblems);
};
