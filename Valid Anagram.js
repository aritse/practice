// Given two strings s and t , write a function to determine if t is an anagram of s.

/* My solution 1 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//   if (s.length != t.length) {
//     return false;
//   }
//   s = Array.from(s).sort();
//   t = Array.from(t).sort();
//   for (i in s) {
//     if (s[i] != t[i]) {
//       return false;
//     }
//   }
//   return true;
// };

/* My solution 2 */
// var isAnagram = function(s, t) {
//   return (
//     s
//       .split("")
//       .sort()
//       .join() ===
//     t
//       .split("")
//       .sort()
//       .join()
//   );
// };

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = {};
  for (let c of s) count[c] = count[c] + 1 || 1;

  for (let c of t) {
    if (!count[c]) return false;
    count[c]--;
  }
  return true;
}

console.log(isAnagram("anagram", "aanamgr"));
console.log(isAnagram("anagram", "aanamgs"));
