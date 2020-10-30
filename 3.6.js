class MyQueue {
  constructor() {
    this.array = new Array();
    this.dogs = new Array();
    this.cats = new Array();
  }

  enqueue(v) {
    this.array.push(v);
    if (v.includes("c")) this.cats.push(v);
    else this.dogs.push(v);
  }

  dequeue() {
    const v = this.array.shift();
    if (v.includes("c")) this.cats.shift();
    else this.dogs.shift();
    return v;
  }

  dequeueDog() {
    const v = this.dogs.shift();
    this.array.splice(this.array.indexOf(v), 1);
    return v;
  }

  dequeueCat() {
    const v = this.cats.shift();
    this.array.splice(this.array.indexOf(v), 1);
    return v;
  }

  isEmpty() {
    return this.array.length === 0;
  }
}

const queue = new MyQueue();
queue.enqueue("c1");
queue.enqueue("d1");
queue.enqueue("c2");
queue.enqueue("c3");
queue.enqueue("d2");
console.log(queue.dequeue()); // c1
console.log(queue.isEmpty()); // false
console.log(queue.dequeueCat()); // c2
console.log(queue.dequeue()); // d1
console.log(queue.dequeueDog()); // d2
console.log(queue.dequeue()); // c3
console.log(queue.isEmpty()); // true
