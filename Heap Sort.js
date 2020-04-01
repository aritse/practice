const heapify = (numbers, n, parent) => {
  let largest = parent;
  let [leftChild, rightChild] = [parent * 2 + 1, parent * 2 + 2];

  if (leftChild < n && numbers[leftChild] > numbers[largest]) largest = leftChild;
  if (rightChild < n && numbers[rightChild] > numbers[largest]) largest = rightChild;

  if (largest !== parent) {
    [numbers[largest], numbers[parent]] = [numbers[parent], numbers[largest]];
    heapify(numbers, n, largest);
  }

  return numbers;
};

const heapSort = (numbers, n) => {
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    heapify(numbers, n, i);
  }

  for (let i = n - 1; i >= 0; i--) {
    // swap
    [numbers[i], numbers[0]] = [numbers[0], numbers[i]];
    heapify(numbers, i, 0);
  }

  return numbers;
};

const numbers = [3, 4, 1, 4, 2, 4, 9, 6, 76, 34, 345, 2, 3, 0];
console.log(heapSort(numbers, numbers.length));
