/**
 * Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?
 */

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
function backspaceCompare(S, T) {
  const stackS = [];
  S.split("").forEach((c) => {
    if (c === "#") {
      if (stackS.length > 0) stackS.pop();
    } else stackS.push(c);
  });
  const stackT = [];
  T.split("").forEach((c) => {
    if (c === "#") {
      if (stackT.length > 0) stackT.pop();
    } else stackT.push(c);
  });

  if (stackS.length !== stackT.length) return false;
  for (let i = 0; i < stackS.length; i++) {
    if (stackS[i] !== stackT[i]) return false;
  }
  return true;
}

console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a##c", "#a#c")); // true
console.log(backspaceCompare("a#c", "b")); // false
