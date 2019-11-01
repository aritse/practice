import { createMinBST } from './Tree';

/* DESCRIPTION
Implement a function to check if a binary tree is a binary search tree.
*/

var isBST = root => {
    var visitNode = value => traversal.push(value);

    var inorder = function (root) {
        if (root) {
            inorder(root.left);
            visitNode(root.value);
            inorder(root.right);
        }
    };

    const traversal = [];
    inorder(root);
    for (let i = 1; i < traversal.length; i++)
        if (traversal[i - 1] > traversal[i])
            return false;
    return true;
};

/* Driver */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tree = createMinBST(numbers);
console.log(isBST(tree));
tree.value = 10;
console.log(isBST(tree));
