function minSubArrayLen(nums, s) {
  let len = Infinity;
  let [left, right] = [0, 0];
  let sum = 0;

  while (left < nums.length) {
    if (sum < s && right < nums.length) {
      sum += nums[right];
      right++;
    } else if (sum >= s) {
      len = Math.min(len, right - left);
      sum -= nums[left];
      left++;
    } else {
      break;
    }
  }
  return len;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
