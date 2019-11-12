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
    let x = ~0 << i;             // 11111100
    let y = ~0 >>> (32 - j - 1); // 00011111
    let z = x & y;               // 00011100
    let mask = ~z;               // 11100011
    N &= mask; // clears bits from i to j
    M <<= i; // align M to position i
    return N | M;
};

let result = insert(1024, 19, 2, 6); // expected 1100
console.log(result);
result = insert(53, 26, 2, 6); // expected 105
console.log(result);

/* APPROACH
First, we clear the bits of N at position from i to j by using a mask that looks like
11100011. Then, left shift M by i to align M to the appropriate position. Finally, we OR
the resulting N and M.

To create the mask, we first do a left shift on 11111111 by i amount resulting in number like
11111100. Then, we do a logical right shift on 11111111 by (32-j -1) resulting in number like
00011111. Then, we do AND of these two numbers resulting in number like 00011100. Finally,
we negate this resulting in a mask like 11100011. */