class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.nodes = [];
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.nodes.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.nodes.length - 1;
    const node = this.nodes[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentNode = this.nodes[parentIndex];
      if (node.priority >= parentNode.priority) {
        break;
      }
      this.nodes[parentIndex] = node;
      this.nodes[index] = parentNode;
      index = parentIndex;
    }
  }

  dequeue() {
    const min = this.nodes[0];
    const lastNode = this.nodes.pop();
    if (this.nodes.length > 0) {
      this.nodes[0] = lastNode;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let index = 0;
    const length = this.nodes.length;
    const node = this.nodes[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChildNode;
      let rightChildNode;
      let swap = null;

      if (leftChildIndex < length) {
        leftChildNode = this.nodes[leftChildIndex];
        if (leftChildNode.priority < node.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChildNode = this.nodes[rightChildIndex];
        if (
          (swap === null && rightChildNode.priority < node.priority) ||
          (swap !== null && rightChildNode.priority < leftChildNode.priority)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) {
        break;
      }
      this.nodes[index] = this.nodes[swap];
      this.nodes[swap] = node;
      index = swap;
    }
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("A", 1);
priorityQueue.enqueue("B", 5);
priorityQueue.enqueue("C", 4);
priorityQueue.enqueue("D", 2);
priorityQueue.enqueue("E", 3);
priorityQueue.enqueue("F", 2);
priorityQueue.enqueue("G", 9);
priorityQueue.enqueue("H", 8);
priorityQueue.enqueue("I", 7);
priorityQueue.enqueue("J", 6);

console.log(priorityQueue);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue);
