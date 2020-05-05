function buildHeap(A) {
  const len = A.length;
  let start = iParent(len - 1);
  while (start >= 0) {
    heapify(A, start, len);
    start--;
  }
}

const iLeft = (parent) => 2 * parent + 1;
const iRight = (parent) => 2 * parent + 2;
const iParent = (child) => ((child - 1) / 2) | 0;

function heapify(A, parent, size) {
  const [left, right] = [iLeft(parent), iRight(parent)];

  let largest = left < size && A[left] > A[parent] ? left : parent;
  largest = right < size && A[right] > A[largest] ? right : largest;

  if (largest !== parent) {
    [A[largest], A[parent]] = [A[parent], A[largest]];
    heapify(A, largest, size);
  }
}

function heapSort(A) {
  buildHeap(A);
  for (let i = A.length - 1; i > 0; i--) {
    [A[i], A[0]] = [A[0], A[i]];
    heapify(A, 0, i);
  }
}

const A = [11, 2, 9, 13, 57, 25, 17, 1, 90, 3];
heapSort(A);
console.log(A);
