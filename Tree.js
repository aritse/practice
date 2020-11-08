var insertNode = function (root, number) {
  if (root)
    if (number < root.value)
      if (root.left) insertNode(root.left, number);
      else root.left = new TreeNode(number);
    else if (root.right) insertNode(root.right, number);
    else root.right = new TreeNode(number);
};

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BST {
  constructor(numbers = null) {
    this.root = numbers ? this.createMinBST(numbers) : null;
  }

  createMinBST(numbers) {
    const len = numbers.length;
    if (len < 1) {
      return null;
    }
    const mid = Math.floor(len / 2);
    const node = new TreeNode(numbers[mid]);
    node.left = this.createMinBST(numbers.slice(0, mid));
    node.right = this.createMinBST(numbers.slice(mid + 1));
    return node;
  }

  preorder() {
    return this.preorderHelper(this.root, []);
  }
  inorder() {
    return this.inorderHelper(this.root, []);
  }
  postorder() {
    return this.postorderHelper(this.root, []);
  }

  preorderHelper(root, out) {
    if (root) {
      out.push(root.value);
      this.preorderHelper(root.left, out);
      this.preorderHelper(root.right, out);
    }
    return out;
  }

  inorderHelper(root, out) {
    if (root) {
      this.inorderHelper(root.left, out);
      out.push(root.value);
      this.inorderHelper(root.right, out);
    }
    return out;
  }

  postorderHelper(root, out) {
    if (root) {
      this.postorderHelper(root.left, out);
      this.postorderHelper(root.right, out);
      out.push(root.value);
    }
    return out;
  }

  toString() {
    return this.inorder(this.root);
  }

  getNodeHelper(root, value) {
    if (root === null) return null;
    if (root.value === value) return root;
    return (
      this.getNodeHelper(root.left, value) ||
      this.getNodeHelper(root.right, value)
    );
  }

  getNodeByValue(value) {
    return this.getNodeHelper(this.root, value);
  }

  bfs() {
    const visited = [];
    const queue = [this.root];
    while (queue.length > 0) {
      const node = queue.shift();
      visited.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }
}
