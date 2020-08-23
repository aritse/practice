function findDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (nums[n - 1] > 0) {
      nums[i--] = nums[n - 1];
      nums[n - 1] = 0;
    }
  }
  return nums.filter((n) => n);
}
