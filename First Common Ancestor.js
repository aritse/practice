import { Tree } from "./MyTree";

/* DESCRIPTION
Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree.
Avoid storing additional nodes in a data structure. Note: This is not necessaritly BST. */

/**
 * @param {Tree} tree
 * @param {number} a 
 * @param {number} b 
 * @returns {TreeNode}
 */
var commonAncestor = function (tree, a, b) {
    const node = tree.root;
    if (node === null) return null;
    const [leftTree, rightTree] = [new Tree(), new Tree()];
    [leftTree.root, rightTree.root] = [node.left, node.right];

    if (leftTree.root && leftTree.getNodeByValue(a) && leftTree.getNodeByValue(b)) return commonAncestor(leftTree, a, b);
    if (rightTree.root && rightTree.getNodeByValue(a) && rightTree.getNodeByValue(b)) return commonAncestor(rightTree, a, b);
    return node;
}

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tree = new Tree(values);
console.log("Ancestor: ", commonAncestor(tree, 1, 1).value);
