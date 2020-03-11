/* Design and implement an iterator to flatten a 2d vector. It should support the following operations: next and hasNext.

 

Example:

Vector2D iterator = new Vector2D([[1,2],[3],[4]]);

iterator.next(); // return 1
iterator.next(); // return 2
iterator.next(); // return 3
iterator.hasNext(); // return true
iterator.hasNext(); // return true
iterator.next(); // return 4
iterator.hasNext(); // return false
 

Notes:

Please remember to RESET your class variables declared in Vector2D, as static/class variables are persisted across multiple test cases. Please see here for more details.
You may assume that next() call will always be valid, that is, there will be at least a next element in the 2d vector when next() is called.
 

Follow up:

As an added challenge, try to code it using only iterators in C++ or iterators in Java. */

/**
 * @param {number[][]} v
 */
const Vector2D = function(v) {
  this.vector = [];
  v.forEach(list => this.vector.push(...list));
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function() {
  return this.vector.shift();
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function() {
  return this.vector.length > 0;
};

/**
 * Your Vector2D object will be instantiated and called as such:
 * const obj = new Vector2D(v)
 * const param_1 = obj.next()
 * const param_2 = obj.hasNext()
 */

const iterator = new Vector2D([[1, 2], [3], [4]]);
console.log(iterator.vector);
