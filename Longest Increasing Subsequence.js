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
var lengthOfLIS = function(nums) {
  const len = nums.length;
  if (len < 1) return 0;
  const lisAtIndex = Array(len).fill(1);
  for (let i = len - 2; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] < nums[j]) {
        lisAtIndex[i] = Math.max(lisAtIndex[i], 1 + lisAtIndex[j]);
      }
    }
  }
  return Math.max(...lisAtIndex);
};

const lengthOfLIS2 = nums => {
  const len = nums.length;
  if (len < 1) return 0;
  const lisAtIndex = Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        lisAtIndex[i] = Math.max(lisAtIndex[i], 1 + lisAtIndex[j]);
      }
    }
  }
  return Math.max(...lisAtIndex);
};

// Another solution found online
/* EXPLANATION
  Basically, the algorithm builds a subsequence of numbers in increasing order.
  The start of the subsequence is the first non-greedy trough found. The end of the subsequence keeps extending as long as there is an ever-increasing number found. When the iteration encounters a number that falls in the middle of the subsequence, that number will become the "new" end of the shrunk subsequence.
  
  Since the subsequence is always sorted, finding the position of a number in the sorted array can be a binary search. This is how we achieve the log(n) complexity. In fact, the cue in the problem description suggests that the optimal algorithm should be binary which means on each iteration, divide the search space in half. In interviews, you can pick up cues by asking questions like "What is the time complexity required for this problem?"
  
  Note that a bitwise operator such as |, <<, and >> can be used instead of Math.floor(). How does it work? The JS interpreter converts all operands of a bitwise operator into 32-bit numbers first. That means truncating an operand that doesn't fit in 32 bits.*/

// var lengthOfLIS = function (nums) {
//     if (nums.length < 1) return 0;
//     const sequence = nums.slice(0, 1);
//     nums.forEach(n => {
//         if (n < sequence[0]) sequence[0] = n;
//         else if (n > sequence[sequence.length - 1]) sequence.push(n);
//         else {
//             let [l, r] = [0, sequence.length - 1];
//             while (l < r) {
//                 const mid = (l + r) / 2 | 0;
//                 if (sequence[mid] >= n) r = mid;
//                 else l = mid + 1;
//             }
//             sequence[r] = n;
//         }
//     });
//     return sequence.length;
// };

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS2(nums)); // expect 4
