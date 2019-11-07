import { Stack } from "./Stack";

/* DESCRIPTION
Implement a MyQueue class which implements a queu using two stacks. */

class MyQueue {
    constructor() {
        this.stack = new Stack();
        this.temp = new Stack();
    }

    enqueue(item) {
        this.stack.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Empty queue");
        }
        while (!this.stack.isEmpty()) {
            this.temp.push(this.stack.pop());
        }
        const item = this.temp.pop();
        while (!this.temp.isEmpty()) {
            this.stack.push(this.temp.pop());
        }
        return item;
    }

    isEmpty() {
        return this.stack.isEmpty();
    }

    getFront() {
        if (this.isEmpty()) {
            throw new Error("Empty queue");
        }
        while (!this.stack.isEmpty()) {
            this.temp.push(this.stack.pop());
        }
        const item = this.temp.peek();
        while (!this.temp.isEmpty()) {
            this.stack.push(this.temp.pop());
        }
        return item;
    }

    clear() {
        while (!this.stack.isEmpty()) {
            this.stack.pop();
        }
    }
}

// Driver
const queue = new MyQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(5);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.getFront());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
