/** You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

Follow up: Your solution should run in O(log n) time and O(1) space. */

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNonDuplicate(nums) {
    const nums2 = Array.from(new Set(nums));
    const doubleSum = 2 * nums2.reduce((sum, n) => sum + n, 0);
    const singleSum = nums.reduce((sum, n) => sum + n, 0);
    return doubleSum - singleSum;
}
