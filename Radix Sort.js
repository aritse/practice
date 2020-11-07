const getDigit = (n, pos) => Math.floor((Math.abs(n) / Math.pow(10, pos)) % 10);

const digitCount = (n) => (n ? Math.floor(Math.log10(Math.abs(n))) + 1 : 0);

const mostDigits = (nums) =>
  nums.reduce((count, n) => Math.max(count, digitCount(n)), 0);

function radixSort(nums) {
  const digits = mostDigits(nums);
  for (let k = 0; k < digits; k++) {
    const bucket = Array.from({ length: 10 }, () => []);
    nums.forEach((n) => bucket[getDigit(n, k)].push(n));
    nums = [].concat(...bucket);
  }
  return nums;
}

console.log(radixSort([1345, 1341, 34, 56345, 4, 356356, 645, 8764]));
