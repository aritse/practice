function Stack() {
  this.array = new Array();
}

Stack.prototype.push = function (v) {
  this.array.push(v);
};

Stack.prototype.pop = function () {
  if (this.array.length > 0) {
    return this.array.pop();
  }
  throw new Exception("Empty stack");
};

Stack.prototype.peek = function () {
  if (this.array.length > 0) {
    return this.array[this.array.length - 1];
  }
  throw new Exception("Empty stack");
};

Stack.prototype.isEmpty = function () {
  return this.array.length === 0;
};

function sort(stack) {
  const temp = new Stack();
  while (!stack.isEmpty()) {
    const top = stack.pop();
    if (temp.isEmpty() || temp.peek() <= top) {
      temp.push(top);
    } else {
      while (temp.peek() > top) {
        stack.push(temp.pop());
      }
      temp.push(top);
    }
  }
  while (!temp.isEmpty()) {
    stack.push(temp.pop());
  }
  return stack;
}

const stack = new Stack();
stack.push(1);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.isEmpty());
sort(stack);
