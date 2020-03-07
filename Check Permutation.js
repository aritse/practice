/* Give two strings, write a method to decide if one is a permutation of the other. */
/* A permutation is one of several possible variations, in which a set can be ordered or arranged.
So, if I reorder the two strings in some fashion, they should be equal. */
const checkPerm2 = (a, b) => {
  if (a.length !== b.length) return false;
  return (
    a
      .split("")
      .sort()
      .join("") ===
    b
      .split("")
      .sort()
      .join("")
  );
};

// Another approach: Count chars in first string and decount chars in the second string
const checkPerm = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  // count chars in str1
  const count = [];
  for (let char of str1) count[char] = count[char] + 1 || 1;

  // reduce count of chars from str2
  for (let char of str2) {
    if (count[char] === undefined) return false;
    count[char]--;
    if (count[char] < 0) return false;
  }
  return true;
};

let a = "abdcef";
let s = ["defacb", "abc", "12abcdef", "asdsde"];

for (let b of s) {
  console.log(b, `${checkPerm(a, b) ? "is" : "is NOT"} a perm of`, a);
}
