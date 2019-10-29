/* PROBLEM DESCRIPTION
Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

Input: "aab"
Output: [["aa","b"],["a","a","b"]]

Input: "xabcba"
Output: [["x","a","b","c","b","a"],["x","abcba"],["x","a","bcb","a"]]
*/


/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    var isPalindrome = function (word) {
        const midPoint = Math.floor(word.length / 2);
        const firstHalf = word.substr(0, midPoint);
        const secondHalf = word.substr(word.length - midPoint);
        return firstHalf === secondHalf.split('').reverse().join('');
    };

    var buildPalindromeMatrix = function () {
        const matrix = [...Array(len)].map(() => Array(len).fill(false));
        for (let i = 0; i < len; i++)
            for (let j = 1; j <= len - i; j++)
                if (isPalindrome(s.substr(i, j)))
                    matrix[i][i + j - 1] = true;
        return matrix;
    };

    var dfs = function (pos) {
        if (pos >= len) {
            partitions.push(Array.from(current));
            return;
        }
        for (let i = pos; i < len; i++) {
            if (matrix[pos][i]) {
                const substr = s.substr(pos, i - pos + 1);
                current.push(substr);
                dfs(i + 1);
                current.pop();
            }
        }
    }

    const len = s.length;
    const matrix = buildPalindromeMatrix(s);
    const partitions = [];
    const current = [];
    dfs(0);
    return partitions;
};

console.log(partition("xabcba"));