var insertNode = function (root, number) {
    if (root)
        if (number < root.value)
            if (root.left) insertNode(root.left, number);
            else root.left = new TreeNode(number);
        else
            if (root.right) insertNode(root.right, number);
            else root.right = new TreeNode(number);
}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class Tree {
    constructor(numbers = null) {
        this.root = numbers ? this.createMinBST(numbers) : null;
    }

    createMinBST(numbers) {
        const len = numbers.length;
        if (len < 1) {
            return null;
        }
        const mid = Math.floor(len / 2);
        const node = new TreeNode(numbers[mid]);
        node.left = this.createMinBST(numbers.slice(0, mid));
        node.right = this.createMinBST(numbers.slice(mid + 1));
        return node;
    };

    preorder() { this.preorder(this.root); }
    inorder() { this.inorder(this.root); }
    postorder() { this.postorder(this.root); }

    preorder(root) {
        if (root) {
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    };

    inorder(root) {
        if (root) {
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    };

    postorder(root) {
        if (root) {
            this.postorder(root.left);
            this.postorder(root.right);
            console.log(root.value);
        }
    };

    toString() {
        return this.inorder(this.root);
    }

    getNodeHelper(root, value) {
        if (root === null) return null;
        if (root.value === value) return root;
        return this.getNodeHelper(root.left, value) || this.getNodeHelper(root.right, value);
    }

    getNodeByValue(value) {
        return this.getNodeHelper(this.root, value);
    }
}