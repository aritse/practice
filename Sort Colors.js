/*
PROBLEM DESCRIPTION
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Follow up:

A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
Could you come up with a one-pass algorithm using only constant space?
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let i = 0, j = nums.length - 1;
    while (i < j) {
        if (nums[i] === 0) {
            i++;
        } else { // nums[i] = {1, 2}
            if (nums[j] === 2) {
                j--;
            } else { // nums[i] = {1, 2} nums[j] = {0, 1}
                if (nums[j] === 0) {
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                    i++;
                } else { // nums[i] = {1, 2} nums[j] = {1}
                    if (nums[i] === 2) {
                        [nums[i], nums[j]] = [nums[j], nums[i]];
                        j--;
                    } else { // nums[i] = {1} nums[j] = {1}
                        let ones = 1;
                        while ((i + ones) < j && nums[i + ones] === 1) {
                            ones++;
                        }
                        if ((i + ones) >= j) {
                            return;
                        }
                        if (nums[i + ones] === 0) {
                            [nums[i], nums[i + ones]] = [nums[i + ones], nums[i]];
                            i++;
                        } else {
                            [nums[j], nums[i + ones]] = [nums[i + ones], nums[j]];
                            j--;
                        }
                    }
                }
            }
        }
    }
};


/*
I found this solution online which is better than mine. It has an extra variable to keep the current
element. If the current element is 0, swap it with the element at i. If the current element is 2,
swap it with the element at j.

Credit:
https://leetcode.com/problems/sort-colors/discuss/26549/Java-solution-both-2-pass-and-1-pass
*/

var sortColors = function (nums) {
    let [i, j, curr] = [0, nums.length - 1, 0];
    while (curr <= j) {
        if (nums[curr] === 0) [nums[curr], nums[i++]] = [nums[i], nums[curr]];
        if (nums[curr] === 2) [nums[curr--], nums[j--]] = [nums[j], nums[curr]];
        curr++;
    }
}