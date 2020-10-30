class maxStack {
  push(data) {}

  pop() {
    return poppedData;
  }

  max() {
    return maxValue;
  }
}

function stackMin() {
  const regStack = new Array();
  const minStack = new Array();
}

stackMin.prototype.push = function (data) {
  this.stack.push(data);
  if (data <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(data);
  }
};

stackMin.prototype.pop = function () {
  if (this.regStack.length === 0) {
    throw new Exception("Empty stack");
  }
  const poppedData = this.regStack.pop();
  if (poppedData === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
  return poppedData;
};

stackMin.prototype.min = function () {
  if (this.minStack.length === 0) {
    throw new Exception("Empty stack");
  }
  return this.minStack[this.minStack.length - 1];
};

const stack = new stackMin();
stack.push(1);
