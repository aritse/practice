import { BST } from "./Tree";
import { traverse } from "@babel/types";

/* DESCRIPTION
T1 and T2 are two very large binary trees with T1 much bigger than T2. Create an algorithm to determine if T2 is a subtree of T1.
T2 is a subtree of T1 if there exists a node n in T1 such that the subtree of n is identical to T2. That is, if you cut off
a branch at node n, the two trees would be identical. */

var isSubtree = function (a, b) {
    var isEqual = function (nodeA, nodeB) {
        if (nodeA === null && nodeB === null) return true;
        if (!nodeA || !nodeB) return false;
        if (nodeA.value === nodeB.value)
            return isEqual(nodeA.left, nodeB.left) && isEqual(nodeA.right, nodeB.right);
        return false;
    }

    var isSubtreeHelper = function (node) {
        if (node) {
            if (node.value === b.value && isEqual(node, b))
                return true;
            return isSubtreeHelper(node.left) || isSubtreeHelper(node.right);
        }
        return false;
    };

    return isSubtreeHelper(a);
};

// Driver
let a, b;
a = new BST([1, 2, 3, 4, 5, 6, 7, 8, 9]);
b = new BST([6, 7, 8, 9]);
console.log(isSubtree(a.root, b.root)); // expect true

a = new BST([1, 2, 3, 4, 5, 6, 7, 8, 9]);
b = new BST([4, 5, 6, 7]);
console.log(isSubtree(a, b)); // expect false

/*
CONSIDERATIONS
Why does it says that they are very large trees? Efficiency is important.
Since they are not necessarily complete binary trees, heaps can't be used.
Duplicates are allowed. That means we could find nodes with identical values.
They are not necessarily BST. There could be more than one subtree that
are identical to T2.
*/