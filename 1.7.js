function rotateMatrix(m) {
  const n = m.length;

  for (let layer = 0; layer < ((n / 2) | 0); layer++) {
    const [first, last] = [layer, n - 1 - layer];
    for (let i = first; i < last; i++) {
      const offset = i - first;
      [
        m[first][i],
        m[last - offset][first],
        m[last][last - offset],
        m[i][last],
      ] = [
        m[last - offset][first],
        m[last][last - offset],
        m[i][last],
        m[first][i],
      ];
    }
  }

  return m;
}

const m = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(rotateMatrix(m));
