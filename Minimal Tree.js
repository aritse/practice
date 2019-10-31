/* DESCRIPTION
Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a
binary search tree with minimal height
*/

/**
 * 
 * @param {number[]} numbers 
 * @returns {TreeNode}
 */
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
 * @param {number[]} numbers 
 * @param {number} start - starting index of the subarray
 * @param {number} end - ending index of the subarray
 * @returns {TreeNode}
 */
var createMinBST2 = function (numbers, start, end) {
    if (end < start) return null;
    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode(numbers[mid]);
    node.left = createMinBST2(numbers, start, mid - 1);
    node.right = createMinBST2(numbers, mid + 1, end);
    return node;
};

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(createMinBST(numbers));
console.log(createMinBST2(numbers2, 0, numbers2.length - 1));

/*
Both produce the desired result with different trees. There is no one
correct answer here. Interesting.
*/