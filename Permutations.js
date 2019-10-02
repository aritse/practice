// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length === 0) return [[]];
    const x = nums.pop();
    const permutations = permute(nums);
    const result = [];
    for (p of permutations) {
        for (let i = 0; i <= p.length; i++) {
            const q = Array.from(p);
            q.splice(i, 0, x);
            result.push(q);
        }
    }
    return result;
};

/**
 * Questions to ask and assumptions to consider:
 *
 * 1. Signed integers? No, positive.
 * 2. How many bits to represent an integer? Any
 * 3. Empty collection allowed? Yes
 * 4. Is the order important? Assume not.
 */