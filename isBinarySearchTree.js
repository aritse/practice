/** Write a function to check that a binary tree ↴ is a valid binary search tree. */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value) {
        this.left = new TreeNode(value);
        return this.left;
    }

    insertRight() {
        this.right = new TreeNode(value);
        return this.right;
    }
}

const isBinarySearchTree = (root) => {
    const stack = [];
    stack.push({ node: root, lower: -Infinity, upper: Infinity });

    while (stack.length) {
        const { node, lower, upper } = stack.pop();
        if (node.value <= lower || node.value >= upper) return false;
        if (node.left)
            stack.push({ node: node.left, lower: lower, upper: node.value });
        if (node.right)
            stack.push({ node: node.right, lower: node.value, upper: upper });
    }
};

const isBinarySearchTree = (root, lower, upper) => {
    lower = lower || -Infinity;
    upper = upper || Infinity;
    if (!root) return true;
    if (root.value <= lower || root.value >= upper) return false;
    return (
        helper(root.left, lower, root.value) &&
        helper(root.right, root.value, upper)
    );
};
