/**
 * @param {number[]} arr
 * @return {number}
 */
function sumOddLengthSubarrays(nums) {
  let total = 0;

  for (let len = 1; len <= nums.length; len += 2) {
    let sum = 0;
    for (let i = 0; i <= nums.length - len; i++) {
      const subArray = nums.slice(i, i + len);
      sum += add(subArray);
    }
    total += sum;
  }

  return total;
}

const add = (nums) => nums.reduce((sum, n) => sum + n, 0);
