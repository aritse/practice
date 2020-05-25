/** You are implementing a binary tree class from scratch which, in addition to insert, find, and delete, has a method getRandomNode() which returns
 * a random node from the tree. All nodes should be equally likely to be chose. Design and implement an algorithm for getRandomNode,
 * and explain how you would implement the rest of the methods. */

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.size = 1;
    }

    getRandomNode() {
        const leftSize = left ? this.left.size : 0;
        const index = (Math.random() * 100) % this.size | 0;
        return index < leftSize
            ? this.left.getRandomNode()
            : this.right.getRandomNode();
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
        this.nodes = [];
    }

    insert = (d) => {
        if (d <= this.data) {
            if (this.left) this.left.insert(d);
            else this.left = new Node(d);
        } else {
            if (this.right) this.right.insert(d);
            else this.right = new Node(d);
        }
        this.size++;
    };

    find(d) {
        if (d === this.data) return this;
        if (d <= this.data) return this.left ? this.left.find(d) : null;
        if (d > this.data) return this.right ? this.right.find(d) : null;
    }
}
