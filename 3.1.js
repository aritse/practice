class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  peek() {
    if (this.top) return this.top.data;
    return null;
  }

  push(data) {
    const node = new StackNode(data);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (this.top) {
      const data = this.top.data;
      this.top = this.top.next;
      return data;
    }
    return null;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
stack.push(4);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
