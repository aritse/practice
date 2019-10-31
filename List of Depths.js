/* DESCRIPTION
Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth.
*/

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class LLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

var createMinBST = function (numbers) {
    const len = numbers.length;
    if (len < 1) return null;
    const mid = Math.floor(len / 2);
    const node = new TreeNode(numbers[mid]);
    node.left = createMinBST(numbers.slice(0, mid));
    node.right = createMinBST(numbers.slice(mid + 1));
    return node;
};

/**
 * 
 * @param {TreeNode} tree 
 * @returns {LLNode[]}
 */

var preorder = function (root, lists, level) {
    if (root) {
        let list = [];
        if (lists.length === level) lists.push(list);
        else list = lists[level];
        list.push(root.value);
        preorder(root.left, lists, level + 1);
        preorder(root.right, lists, level + 1);
    }
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tree = createMinBST(numbers);
const lists = [];
preorder(tree, lists, 0);
console.log(lists);