// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */

/* My solution */

// var missingNumber = function(nums) {
//   var len = nums.length;
//   var sum = (len * (len + 1)) / 2;
//   var total = 0;
//   for (n of nums) total += n;
//   return sum - total;
// };

/* Solution that I found it cool using reduce and accumulator */

var missingNumber = function(nums) {
  var len = nums.length;
  var sum = (len * (len + 1)) / 2;
  var total = nums.reduce((a, b) => a + b);
  return sum - total;
};
