function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    for (var j = i - 1; j >= 0 && nums[j] > curr; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = curr;
  }
  return nums;
}

const numbers = Array(20);
for (let i = 0; i < 20; i++) numbers[i] = (Math.random() * 100) | 0;
console.log(insertionSort(numbers));
