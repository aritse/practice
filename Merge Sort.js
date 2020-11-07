/* DESCRIPTION
Divide the array in half, sort each half, and then merge the sorted arrays into one */

var merge = function (numbers, first, second) {
  for (let i = 0; i < numbers.length; i++) {
    if (first.length < 1) numbers[i] = second.shift();
    else if (second.length < 1) numbers[i] = first.shift();
    else numbers[i] = first[0] <= second[0] ? first.shift() : second.shift();
  }
};

var mergeSort = function (numbers) {
  if (numbers.length > 1) {
    const mid = (numbers.length / 2) | 0;
    const [first, second] = [numbers.slice(0, mid), numbers.slice(mid)];
    mergeSort(first);
    mergeSort(second);
    merge(numbers, first, second);
  }
};

// function merge(A, B) {
//   const M = [];
//   let [a, b] = [0, 0];
//   while (a < A.length && b < B.length) {
//     if (A[a] < B[b]) M.push(A[a++]);
//     else M.push(B[b++]);
//   }
//   return a === A.length ? [...M, ...B.slice(b)] : [...M, ...A.slice(a)];
// }

// function mergeSort(nums) {
//   if (nums.length < 2) return nums;
//   const mid = nums.length / 2 | 0;
//   return merge(mergeSort(nums.slice(0, mid )), mergeSort(nums.slice(mid)));
// }

console.log(merge([1, 3, 5, 7, 9], [2, 4, 6, 8, 9, 10]));

// Driver
const odd = Array(9); // odd length
for (let i = 0; i < 9; i++) odd[i] = (Math.random() * 100) | 0;
mergeSort(odd);
console.log(odd);

const even = Array(10); // odd length
for (let i = 0; i < 10; i++) even[i] = (Math.random() * 100) | 0;
mergeSort(even);
console.log(even);
