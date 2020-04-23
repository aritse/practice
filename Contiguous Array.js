/**Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Note: The length of the given binary array will not exceed 50,000. */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = (nums) => {
  const map = {};
  map[0] = -1;
  let [maxLen, count] = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    count += nums[i] || -1;
    if (map[count] === undefined) map[count] = i;
    else maxLen = Math.max(maxLen, i - map[count]);
  }
  return maxLen;
};
