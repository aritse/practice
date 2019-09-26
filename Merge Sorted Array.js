// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,7,0,0,0], m = 4
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
    let i = j = 0;
    while (j < n && i < m + j) {
        if (nums1[i] > nums2[j])
            nums1.splice(i, 0, nums2[j++]);
        i++;
    }
    if (j < n)
        nums1.splice(i, 0, ...nums2.slice(j));
    nums1.splice(m + n);
};

/*
Assumptions and questions to ask about the problem
1. Sorted:
    a. sorted in ascending order
    b. sorted in alphabetically
2. Integer:
    a. signed or unsigned integer
    b. limit (byte, half word, word, double word)
3. Space:
    a. in place sort
    b. whether space constraint
4. Time
    a. whether time constraint
5. Array
    a. both arrays are of the same size
    b. is null valid input
    c. max array size
    d. combined array has enough size
    e. return combined array
*/
