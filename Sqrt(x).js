// Implement int sqrt(int x).

// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

// Example 1:

// Input: 4
// Output: 2
// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since 
//              the decimal part is truncated, 2 is returned.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    // base cases
    if (x === 0) return 0;
    if (x === 1) return 1;

    // converge the sqrt by taking the middle on each iteration
    let lower_bound = 1;
    let upper_bound = x * 10;

    let sqrt = Math.floor((lower_bound + upper_bound) / 2);
    while (!(x >= (sqrt ** 2) && x < ((sqrt + 1) ** 2))) {
        if (x < sqrt ** 2) upper_bound = sqrt;
        else lower_bound = sqrt;

        sqrt = Math.floor((lower_bound + upper_bound) / 2);
    }

    return sqrt;
};

/*
Questions and assumptions:
1. What is the return type? Integer
2. If not integer type, what is the precision? 0
3. If not integer type, is .5 rounded up or down? Down
4. What is the maximum value of the input? Depends on the architecture 32 or 64
5. Is the input type integer? Yes
6. Is the input number signed? No
7. Is the input number is a guaranteed square of a number? No
*/


/*
Solution that I found online which is purely mathematical.
Reference: https://www.youtube.com/watch?v=1uN8cBGVpfs
*/

// var mySqrt = function (x) {
//     let sqrt = x;
//     while (sqrt ** 2 > x)
//         sqrt = Math.floor((sqrt + x / sqrt) / 2);
//     return sqrt;
// };
