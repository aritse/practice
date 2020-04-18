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

const findMaxLength = (nums) => {
  const n = nums.length;
  let movingSum = 0;
  for (let i = 0; i < n; ++i) {
    nums[i] = nums[i] || -1;
    movingSum += nums[i];
    nums[i] = movingSum;
  }

  let maxLength = 0;
  for (let j = n - 1; j >= 0; --j) {
    for (let i = 0; i <= j; ++i) {
      const sum = i < 1 ? nums[j] : nums[j] - nums[i - 1];
      if (sum === 0) maxLength = Math.max(maxLength, j - i + 1);
    }
  }

  return maxLength;
};
