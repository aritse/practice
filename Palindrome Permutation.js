// Given a string, write a function to check if it is a permutation of a palindrome
// Palindrome has at most one character that is odd
const isPP2 = s => {
  s = s.trim().toLowerCase();
  const count = [];
  for (const char of s) {
    if (char !== " ") {
      count[char] = count[char] + 1 || 1;
    }
  }
  let seenOdd = false;
  for (const v of Object.values(count)) {
    if (v % 2)
      if (seenOdd) return false;
      else seenOdd = true;
  }
  return true;
};

const isPP = s => {
  const toggleBit = i => {
    const mask = 1 << i;
    vector = vector & mask ? vector & ~mask : vector | mask;
  };

  s = s.trim().toLowerCase();
  let vector = 0;
  for (const char of s) {
    if (char !== " ") {
      let i = char.charCodeAt(0) - "a".charCodeAt(0);
      toggleBit(i);
    }
  }
  return (vector & (vector - 1)) === 0;
};

const s = "Tact bbbCoa";
console.log(isPP(s));
