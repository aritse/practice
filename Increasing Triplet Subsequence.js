/**Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

Return true if there exists i, j, k
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

Example 1:

Input: [1,2,3,4,5]
Output: true
Example 2:

Input: [5,4,3,2,1]
Output: false */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const increasingTriplet2 = nums => {
  const len = nums.length;
  const solutions = Array(len).fill(1);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        solutions[i] = Math.max(solutions[i], solutions[j] + 1);
        if (solutions[i] > 2) {
          return true;
        }
      }
    }
  }
  return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5])); // true

/* Solutions found online - O(n) runtime */
// const increasingTriplet = nums => {
//   let [lowerTrough, higherTrough] = [Infinity, Infinity];
//   for (let i = 0; i < nums.length; i++) {
//     const n = nums[i];
//     if (n <= lowerTrough) lowerTrough = n;
//     else if (n <= higherTrough) higherTrough = n;
//     else return true;
//   }
//   return false;
// };
