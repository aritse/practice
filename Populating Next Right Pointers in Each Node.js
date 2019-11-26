/* DESCRIPTION
You are given a perfect binary tree. The binary tree has the following definition:

function Node(val, left, right, next) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.next = next;
};

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

QUESTIONS & ASSUMPTIONS
Is there a space constraint? Yes, you may only use constant extra space. */

import { Queue } from './Queue';

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (root) {
        // breadth-first traversal
        const bft = new Array();
        const queue = new Queue();
        queue.enqueue(root);
        while (!queue.isEmpty()) {
            const node = queue.dequeue();
            if (node.left) queue.enqueue(node.left);
            if (node.right) queue.enqueue(node.right);
            bft.push(node);
        }

        // connect adjacent nodes
        for (let i = 0; i < bft.length - 1; i++) bft[i].next = bft[i + 1];

        // terminate the last node on each level
        const height = Math.log2(bft.length + 1) - 1;
        for (let i = 0; i < height + 1; i++)
            bft[2 ** (i + 1) - 2].next = null;
    }
    return root;
};

const input = { "$id": "1", "left": { "$id": "2", "left": { "$id": "3", "left": null, "next": null, "right": null, "val": 4 }, "next": null, "right": { "$id": "4", "left": null, "next": null, "right": null, "val": 5 }, "val": 2 }, "next": null, "right": { "$id": "5", "left": { "$id": "6", "left": null, "next": null, "right": null, "val": 6 }, "next": null, "right": { "$id": "7", "left": null, "next": null, "right": null, "val": 7 }, "val": 3 }, "val": 1 };

const actual = connect(input);
console.log(actual);

const expected = { "$id": "1", "left": { "$id": "2", "left": { "$id": "3", "left": null, "next": { "$id": "4", "left": null, "next": { "$id": "5", "left": null, "next": { "$id": "6", "left": null, "next": null, "right": null, "val": 7 }, "right": null, "val": 6 }, "right": null, "val": 5 }, "right": null, "val": 4 }, "next": { "$id": "7", "left": { "$ref": "5" }, "next": null, "right": { "$ref": "6" }, "val": 3 }, "right": { "$ref": "4" }, "val": 2 }, "next": null, "right": { "$ref": "7" }, "val": 1 };
console.log(expected);