// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    if (!nums.length) return [[]];

    const n = nums.pop();
    const sets = subsets(nums);
    const solution = [...sets];
    for (const s of sets) {
        const copy = Array.from(s);
        copy.push(n);
        solution.push(copy);
    }
    return solution;
};


/**
 * Another solution that I found online that is pretty neat.
 */

function subsets(nums) {
    const sets = [];
    generateSets([], 0);

    function generateSets(curr, index) {
        sets.push(curr);
        for (let i = index; i < nums.length; i++)
            generateSets([...curr, nums[i]], i + 1);
    }
    return sets;
}