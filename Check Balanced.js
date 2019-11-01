/* DESCRIPTION
Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced
tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.
*/

var height = root => root ? 1 + Math.max(height(root.left), height(root.right)) : 0;

// Unoptimized version
var isBalanced2 = root => root ? Math.abs(height(root.left) - height(root.right)) < 2 && isBalanced2(root.left) && isBalanced2(root.right) : true;

var checkHeight = root => {
    if (!root) return 0;
    const leftHeight = checkHeight(root.left);
    if (leftHeight < 0) return -1;
    const rightHeight = checkHeight(root.right);
    if (rightHeight < 0) return -1;
    return Math.abs(leftHeight - rightHeight) < 2 ? Math.max(leftHeight, rightHeight) + 1 : -1;
};

// Optimized version
var isBalanced = root => checkHeight(root) < 0 ? false : true;

/* Utility functions */
var createMinBST = function (numbers, start, end) {
    if (end < start) return null;
    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode(numbers[mid]);
    node.left = createMinBST(numbers, start, mid - 1);
    node.right = createMinBST(numbers, mid + 1, end);
    return node;
};

var insertNode = function (root, number) {
    if (root)
        if (number < root.value)
            if (root.left) insertNode(root.left, number);
            else root.left = new TreeNode(number);
        else
            if (root.right) insertNode(root.right, number);
            else root.right = new TreeNode(number);
}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

var inorder = function (root) {
    if (root) {
        inorder(root.left);
        console.log(root.value);
        inorder(root.right);
    }
};

/* Driver */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
tree = createMinBST(numbers, 0, numbers.length - 1);
inorder(tree);
console.log(isBalanced(tree));
console.log("Inserting numbers into the tree:");
insertNode(tree, 0);
insertNode(tree, 10);
inorder(tree);
console.log(isBalanced(tree));

