/* DESCRIPTION
In selection sort, we scan the list, find the smallest element and swap it with the first. Then, we find the second smallest
element and swap it with the second element in the list. */

function selectionSort(nums) {
  const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

  for (let i = 0; i < nums.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[smallest]) {
        smallest = j;
      }
    }
    swap(i, smallest);
  }
  return nums;
}

const numbers = Array(20);
for (let i = 0; i < 20; i++) numbers[i] = (Math.random() * 100) | 0;
console.log(selectionSort(numbers));
