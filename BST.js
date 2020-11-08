class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val < current.val) {
          if (!current.left) {
            current.left = node;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = node;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  contains(val) {
    let current = this.root;
    while (true) {
      if (!current) return false;
      if (val === current.val) return true;
      current = val < current.val ? current.left : current.right;
    }
  }
}
