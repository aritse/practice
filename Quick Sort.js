/* DESCRIPTION
Randomly select a pivot and partition the array such that
all elements less the pivot are to the left of the pivot. */

var partition = function (numbers, p, q, pivot) {
  const segment = numbers.slice(p, q + 1);
  for (let i = p; i <= q; i++) numbers[i] = pivot;
  segment.forEach((num) => {
    if (num < pivot) numbers[p++] = num;
    else if (num > pivot) numbers[q--] = num;
  });
  return p;
};

var quickSort = function (numbers, p, q) {
  if (p < q) {
    const mid = ((p + q) / 2) | 0;
    const pivot = numbers[mid];
    const index = partition(numbers, p, q, pivot);
    quickSort(numbers, p, index - 1);
    quickSort(numbers, index + 1, q);
  }
};

var sort = function (numbers) {
  quickSort(numbers, 0, numbers.length - 1);
};

// Driver
// const lengths = [19, 20];
// lengths.forEach((length) => {
//   const numbers = Array(length);
//   for (let i = 0; i < length; i++) numbers[i] = (Math.random() * 100) | 0;
//   console.log("Unsorted: ", numbers);
//   const pivot = numbers[(numbers.length / 2) | 0];
//   const index = partition(numbers, 0, numbers.length - 1, pivot);
//   sort(numbers);
//   console.log("Sorted: ", numbers);
// });

function partition2(nums, start = 0, end = nums.length - 1) {
  const pivot = nums[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > nums[i]) {
      swapIndex++;
      [nums[swapIndex], nums[i]] = [nums[i], nums[swapIndex]];
    }
  }
  [nums[swapIndex], nums[start]] = [nums[start], nums[swapIndex]];
  return swapIndex;
}

function quickSort2(nums, left = 0, right = nums.length - 1) {
  if (left < right) {
    const pivot = partition2(nums, left, right);
    quickSort(nums, left, pivot - 1);
    quickSort(nums, pivot + 1, right);
  }
  return nums;
}

console.log(quickSort2([1, 34, 134, 5, 634, 56, 356, 2345, 52435, -9]));
