/**Given a list of non negative integers, arrange them such that they form the largest number.

For example:

Given [3, 30, 34, 5, 9], the largest formed number is 9534330.

Note: The result may be very large, so you need to return a string instead of an integer. */

module.exports = {
    //param A : array of integers
    //return a strings
    largestNumber: function (A) {
        const B = A.sort((a, b) => {
            a = a.toString();
            b = b.toString();
            return a + b < b + a ? 1 : -1;
        });
        const largest = B.reduce((string, n) => {
            if (n > 0) return string.concat(n);
        }, "");
        return largest || "0";
    },
};
