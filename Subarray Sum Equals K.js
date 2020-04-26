/** Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7]. */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum(N, k) {
  const n = N.length;
  let answer = 0;
  let prefixSum = 0;
  const countPrefixSum = {};
  countPrefixSum[0] = 1;
  for (let right = 0; right < n; right++) {
    prefixSum += N[right];
    answer += countPrefixSum[prefixSum - k] || 0;
    countPrefixSum[prefixSum] = countPrefixSum[prefixSum] + 1 || 1;
  }
  return answer;
}

subarraySum([100, 1, 2, 3, 4], 3);
