/**In a string S of lowercase letters, these letters form consecutive groups of the same character.

For example, a string like S = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z" and "yy".

Call a group large if it has 3 or more characters.  We would like the starting and ending positions of every large group.

The final answer should be in lexicographic order. */

/**
 * @param {string} S
 * @return {number[][]}
 */
const largeGroupPositions = function (S) {
  const len = S.length;
  if (len < 3) return [];

  const positions = [];
  for (let i = 0; i < len - 1; i++) {
    let j = i + 1;
    while (j < len && S.charAt(i) === S.charAt(j)) j++;
    if (j - i >= 3) {
      positions.push([i, j - 1]);
      i = j - 1;
    }
  }
  return positions;
};
