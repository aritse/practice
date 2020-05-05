const heapify = (N, size, parent) => {
  let largest = parent;
  let [iLeft, iRight] = [parent * 2 + 1, parent * 2 + 2];

  if (iLeft < size && N[iLeft] > N[largest]) largest = iLeft;
  if (iRight < size && N[iRight] > N[largest]) largest = iRight;

  if (largest !== parent) {
    [N[largest], N[parent]] = [N[parent], N[largest]];
    heapify(N, size, largest);
  }
};

const heapSort = (N, size) => {
  for (let i = (size / 2) | 0; i >= 0; i--) {
    heapify(N, size, i);
  }

  for (let i = size - 1; i >= 0; i--) {
    [N[i], N[0]] = [N[0], N[i]];
    heapify(N, i, 0);
  }
};

const numbers = [3, 4, 1, 4, 2, 4, 9, 6, 76, 34, 345, 2, 3, 0];
heapSort(numbers, numbers.length);
console.log(numbers);
