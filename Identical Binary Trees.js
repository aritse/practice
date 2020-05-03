module.exports = {
  inorder: function (A) {
    return A ? [...this.inorder(A.left), A.data, ...this.inorder(A.right)] : [];
  },

  isSameTree: function (A, B) {
    const [inA, inB] = [this.inorder(A), this.inorder(B)];
    if (inA.length !== inB.length) return 0;
    for (let i = 0; i < inA.length; i++) {
      if (inA[i] !== inB[i]) {
        return 0;
      }
    }
    return 1;
  },
};
