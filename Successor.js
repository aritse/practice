import { createMinBST, inorder, insertNode } from "./Tree.js"
/* DESCRIPTION
Write an algorithm to find the next node of a give node in BST.
Each node has a link to its parent. */

var leftMostChild = function (node) {
    if (!node) return null;
    while (node.left) node = node.left;
    return node;
};

var successor = function (node) {
    if (!node) return null;
    if (node.right) return leftMostChild(node.right);
    let parent = node.parent;
    while (parent && parent.left !== node) {
        node = parent;
        parent = parent.parent;
    }
    return parent;
};
