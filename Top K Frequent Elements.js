// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Note:

/*
Questions and assumptions:
1. What if k is greater than the number of unique elements? k is always valid, 1 ≤ k ≤ number of unique elements.
2. What are the desired time and space complexities? time complexity must be better than O(n log n), where n is the array's size.
3. Signed integers? It doesn't make any difference.
4. Sparse? Yes
5. Max and min? Sure, can be max or min limit.
6. Is the returned array sorted in descending? Irrelevant
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 * First, count frequencies of each element in O(n). Then, iterate k times. On each iteration,
 * fetch the max value from count{} in O(# of unique elements) and push the
 * associated key to the top K list and delete the key from the count{}.
 * In worst case, the time complexity is O(k * n) and space complexity is O(n).
 */
var topKFrequent = function (nums, k) {
    const count = {}; // count frequencies
    for (let n of nums) count[n] = count[n] + 1 || 1;

    const topK = [];
    for (let i = 0; i < k; i++) {
        const max_val = Math.max(...Object.values(count));
        const max_key = Object.keys(count).filter(k => count[k] === max_val)[0];
        topK.push(max_key);
        delete count[max_key];
    }
    return topK;
};