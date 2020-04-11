// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

// Example:

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.sorted = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  if (this.sorted.length < 1) this.sorted.push(x);
  else {
    let i = 0;
    while (this.sorted[i] < x) {
      i++;
    }
    this.sorted.splice(i, 0, x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length > 0) {
    this.sorted.splice(this.sorted.indexOf(this.stack.pop()), 1);
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.length ? this.stack[this.stack.length - 1] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.sorted.length ? this.sorted[0] : null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
