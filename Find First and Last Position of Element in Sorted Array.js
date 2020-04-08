/**Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1] */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (numbers, target) => {
  let [start, end] = [0, numbers.length - 1];
  while (!(start > end)) {
    let mid = Math.floor((start + end) / 2);
    if (numbers[mid] > target) end = mid - 1;
    else if (numbers[mid] < target) start = mid + 1;
    else {
      for (start = mid; numbers[start] === target; start--);
      for (end = mid; numbers[end] === target; end++);
      return [start + 1, end - 1];
    }
  }
  return [-1, -1];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1,-1]
