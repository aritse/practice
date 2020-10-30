class Stack {
  constructor() {
    this.array = new Array();
  }

  push(v) {
    this.array.push(v);
  }

  pop() {
    if (this.array.length > 0) {
      return this.array.pop();
    }
  }

  peek() {
    if (this.array.length > 0) {
      return this.array[this.array.length - 1];
    }
  }
}

class MyQueue {
  constructor() {
    this.newest = new Stack();
    this.oldest = new Stack();
  }

  enqueue(v) {
    this.newest.push(v);
  }

  dequeue() {
    this.swapStacks();
    return this.oldest.pop();
  }

  peek() {
    this.swapStacks();
    return this.oldest.peek();
  }

  swapStacks() {
    if (this.odlest.isEmpty()) {
      while (this.newest.length) {
        this.odlest.push(this.newest.pop());
      }
    }
  }
}

const queue = new MyQueue();
queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.dequeue());
// queue.enqueue(4);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.isEmpty());
// console.log(queue.dequeue());
