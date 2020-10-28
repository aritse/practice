function zeroMatrix(M) {
  const [m, n] = [M.length, M[0].length];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (M[i][j] !== undefined) {
        if (M[i][j] === 0) {
          for (let k = 0; k < n; k++) M[i][k] = undefined;
          for (let k = 0; k < m; k++) M[k][j] = undefined;
        }
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (M[i][j] === undefined) {
        M[i][j] = 0;
      }
    }
  }
  return M;
}

const m = [
  [1, 2, 0, 3],
  [4, 0, 6, 7],
  [8, 9, 1, 2],
];
console.log(zeroMatrix(m));
