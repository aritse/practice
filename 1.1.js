function isUnique(string) {
  let bitVector = 0;
  for (let c of string) {
    const mask = 1 << (c.charCodeAt(0) - 97);
    if (bitVector & mask) return false;
    bitVector |= mask;
  }
  return true;
}

console.log(isUnique("abcd"));
console.log(isUnique("abca"));
