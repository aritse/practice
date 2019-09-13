// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

// Note: Each term of the sequence of integers will be represented as a string.



// Example 1:

// Input: 1
// Output: "1"
// Example 2:

// Input: 4
// Output: "1211"

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let seq = '1';
    for (let i = 1; i < n; i++) {
        let s = '';
        for (let j = 0; j < seq.length; j++) {
            let count = 1;
            while (j < seq.length - 1 && seq[j] === seq[j + 1]) {
                count++;
                j++;
            }
            s = s.concat(count, seq[j]);
        }
        seq = s;
    }
    return seq;
};


/** Solution found online to be really cool */
// Just split the string to strings of the same digits so '1223334444' would become ['1', '22', '333', '4444']. Then, use map() to count the element.


const countAndSay2 = function (n) {
    return n > 1 ? countAndSay(n - 1).match(/(\d)\1*/g).map(D => D.length + D[0]).join('') : '1';
}