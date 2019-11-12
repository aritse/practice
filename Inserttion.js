/* DESCRIPTION
You are given two 32-bit numbers, N and M, and two bit positions, i and j. Write a method to insert M into N such that M starts a bit j and ednds at bit i.
You can assume that the bits j through i have enough space to fit all of M. Thats is, if M = 10011, you can assume that there are at least 5 bits between j and i.
You would not, for example, have j = 3 and i = 2 because M could not fully fit between bit 3 and bit 2.
Example,
Input: N = 10000000000, M = 10011, i = 2, and j = 6
Output: N = 10001001100 */

var printBits = function (n) {
    if (n >= 0) {
        n = n.toString(2);
        n = "00000000000000000000000000000000".substr(n.length) + n;
    } else {
        n = n.toString(2).substr(1);
        n = "11111111111111111111111111111111".substr(n.length) + n;
    }
    console.log(n);
};

var insert = function (N, M, i, j) {
    let mask = ~0 << i;
    mask &= (~0 >>> (32 - j - 1));
    mask = ~mask;
    N &= mask;
    M <<= i;
    return N | M;
};

let result = insert(1024, 19, 2, 6); // 1100
console.log(result);
result = insert(53, 26, 2, 6); // 105
console.log(result);
