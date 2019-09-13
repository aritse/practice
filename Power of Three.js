// Given an integer, write a function to determine if it is a power of three.

// Example 1:

// Input: 27
// Output: true
// Example 2:

// Input: 0
// Output: false
// Example 3:

// Input: 9
// Output: true
// Example 4:

// Input: 45
// Output: false
// Follow up:
// Could you do it without using any loop / recursion?

/**
 * @param {number} n
 * @return {boolean}
 */

/* My recursive solution */

var isPowerOfThree = function (n) {
    if (n < 1) return false;
    if (n === 1) return true;
    return n % 3 === 0 && isPowerOfThree(n / 3);
};

/* Solution found online */

// Approach 4: Integer Limitations
// An important piece of information can be deduced from the function signature


// In particular, n is of type int. In Java, this means it is a 4 byte, signed integer [ref]. The maximum value of this data type is 2147483647. Three ways of calculating this value are

// Google
// System.out.println(Integer.MAX_VALUE);
// MaxInt = \frac{ 2^{32} }{2} - 1 
// 2
// 2 
// 32

// ​	
//  −1 since we use 32 bits to represent the number, half of the range is used for negative numbers and 0 is part of the positive numbers
// Knowing the limitation of n, we can now deduce that the maximum value of n that is also a power of three is 1162261467. We calculate this as:

// 3^{\lfloor{}\log_3{MaxInt}\rfloor{}} = 3^{\lfloor{}19.56\rfloor{}} = 3^{19} = 11622614673 
// ⌊log 
// 3
// ​	
//  MaxInt⌋
//  =3 
// ⌊19.56⌋
//  =3 
// 19
//  =1162261467

// Therefore, the possible values of n where we should return true are 3^03 
// 0
//  , 3^13 
// 1
//   ... 3^{19}3 
// 19
//  . Since 3 is a prime number, the only divisors of 3^{19}3 
// 19
//   are 3^03 
// 0
//  , 3^13 
// 1
//   ... 3^{19}3 
// 19
//  , therefore all we need to do is divide 3^{19}3 
// 19
//   by n. A remainder of 0 means n is a divisor of 3^{19}3 
// 19
//   and therefore a power of three.

var isPowerOfThree2 = function (n) {
    return n > 0 && 1162261467 % n == 0;
};
