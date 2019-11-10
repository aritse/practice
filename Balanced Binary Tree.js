/* DESCRIPTION
Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced
tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.*/

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

