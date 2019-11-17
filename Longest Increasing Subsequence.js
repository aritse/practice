/* DESCRIPTION
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
            ,4,3,3,2, 1, 1

Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity? */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const len = nums.length;
    if (len < 1) return 0;
    const lisAtIndex = Array(len).fill(1);
    for (let i = len - 2; i >= 0; i--)
        for (let j = i + 1; j < len; j++)
            if (nums[i] < nums[j])
                lisAtIndex[i] = Math.max(lisAtIndex[i], 1 + lisAtIndex[j]);
    return Math.max(...lisAtIndex);
};

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // expect 4