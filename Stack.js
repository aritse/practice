class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export class Stack {
    constructor() {
        this.top = null;
    }

    pop() {
        if (this.isEmpty())
            throw new Error("Empty stack");
        const item = this.top.data;
        this.top = this.top.next;
        return item;
    }

    push(item) {
        const node = new StackNode(item);
        node.next = this.top;
        this.top = node;
    }

    peek() {
        if (this.isEmpty())
            throw new Error("Empty stack");
        return this.top.data;
    }

    isEmpty() {
        return this.top === null;
    }

    list() {
        const elements = [];
        let runner = this.top;
        while (runner) {
            elements.push(runner.data);
            runner = runner.next;
        }
        return elements;
    }
}
