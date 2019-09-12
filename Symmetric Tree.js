// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3


// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3


// Note:
// Bonus points if you could solve it both recursively and iteratively.

/* My solution - do pre and post order traversals. Preorder array is the inverse of the postorder array. */

const isLeaf = node => !(node.left || node.right);

const preOrderTraversal = root => {
    if (root) {
        preOrder.push(root.val);
        preOrderTraversal(root.left);
        preOrderTraversal(root.right);
    } else { preOrder.push(root) }
}

const postOrderTraversal = root => {
    if (root) {
        postOrderTraversal(root.left);
        postOrderTraversal(root.right);
        postOrder.push(root.val);
    } else { postOrder.push(null) }
}

var preOrder, postOrder;

var isSymmetric = function (root) {
    if (!root || isLeaf(root)) return true;
    preOrder = [];
    postOrder = [];
    preOrderTraversal(root);
    postOrderTraversal(root);
    for (let i = 0; i < preOrder.length; i++) {
        if (preOrder[i] !== postOrder[preOrder.length - 1 - i]) return false;
    }
    return true;
};

/* Solution I found online */

// var isSymmetric = function (root) {
//     return isMirror(root, root);
// }

// var isMirror = function (t1, t2) {
//     if (!t1 && !t2) return true;
//     if (!t1 || !t2) return false;
//     return t1.val === t2.val &&
//         isMirror(t1.left, t2.right) &&
//         isMirror(t1.right, t2.left);
// }