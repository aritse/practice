/* DESCRIPTION
In bubble sort, we start at the beginning of the array and swap the first two elements if the first element is greater than the second.
Then, we go to the next pair, and so on, continuously making sweeps of the array until it is sorted. In doing so, the smaller elements
are slowly bubble up to the beginning of the list. */

function bubbleSort(nums) {
  for (let i = nums.length; i > 0; i--)
    for (let j = 0; j < i - 1; j++)
      if (nums[j] > nums[j + 1])
        [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]];
  return nums;
}

const numbers = Array(20);
for (let i = 0; i < 20; i++) numbers[i] = (Math.random() * 100) | 0;
bubbleSort(numbers);
console.log(numbers);
