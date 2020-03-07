/* DESCRIPTION
Implement an algorithm to determine if a string has all unique characters
without using additional data structures. */

const isUnique = function(str) {
  if (str.length > 128) return false;

  const getBit = i => bitVector & (1 << i);
  const setBit = i => (bitVector |= 1 << i);

  let bitVector = 0;
  for (const char of str) {
    const index = char.charCodeAt(0) - "a".charCodeAt(0);
    if (getBit(index)) return false;
    setBit(index);
  }
  return true;
};

// Driver
let str = "abcde";
console.log(isUnique(str));
str = "abcded";
console.log(isUnique(str));
str = "abcdeF";
console.log(isUnique(str));
