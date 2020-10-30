class SetOfStacks {
  constructor(capacity) {
    this.capacity = capacity;
  }

  lastStack() {
    return this.stacks.length > 0 ? this.stacks[this.stacks.length - 1] : null;
  }

  push(data) {
    const last = this.lastStack();

    if (last && !last.isFull()) {
      last.push(data);
    } else {
      const stack = new Stack();
      stack.push(data);
      this.stacks.push(stack);
    }
  }

  pop() {
    const last = this.lastStack();
    if (!last) {
      throw new Exception("Empty stack");
    }
    const data = last.pop();
    if (last.length === 0) {
      this.stacks.pop();
    }
    return data;
  }
}
