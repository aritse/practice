// Given a string, write a function to check if it is a permutation of a palindrome
// Palindrome has at most one character that is odd
const isPP = s => {
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

const s = "Tact Coa";
console.log(isPP(s));
