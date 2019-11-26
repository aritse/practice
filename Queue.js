class Queue {
    constructor() {
        this.head = [];
    }

    enqueue(item) {
        this.head.push(item);
    }

    dequeue() {
        if (this.head.length > 0) {
            return this.head.shift();
        }
        throw Error("Empty queue");
    }

    isEmpty() {
        return this.head.length === 0;
    }

    getFront() {
        if (this.head.length > 0) {
            return this.head[0];
        }
        throw Error("Empty queue");
    }

    clear() {
        this.head = [];
    }
}

export { Queue };

// // Driver
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(5);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.isEmpty());
// queue.enqueue(3);
// queue.enqueue(4);
// console.log(queue.getFront());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.isEmpty());
