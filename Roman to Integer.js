// Roman numerals are represented by seven different symbols{ I, V, X, L, C, D && M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used{

// I can be placed before V (5) && X (10) to make 4 && 9.
// X can be placed before L (50) && C (100) to make 40 && 90.
// C can be placed before D (500) && M (1000) to make 400 && 900.
// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

/* My solution */

// var romanToInt = function(s) {
//   n = 0;
//   i = 0;
//   l = s.length;
//   while (i < l) {
//     if (s[i] == "I") {
//       if (i < l - 1 && s[i + 1] == "V") {
//         n += 4;
//         i += 1;
//       } else if (i < l - 1 && s[i + 1] == "X") {
//         n += 9;
//         i += 1;
//       } else {
//         n += 1;
//       }
//     } else if (s[i] == "X") {
//       if (i < l - 1 && s[i + 1] == "L") {
//         n += 40;
//         i += 1;
//       } else if (i < l - 1 && s[i + 1] == "C") {
//         n += 90;
//         i += 1;
//       } else {
//         n += 10;
//       }
//     } else if (s[i] == "C") {
//       if (i < l - 1 && s[i + 1] == "D") {
//         n += 400;
//         i += 1;
//       } else if (i < l - 1 && s[i + 1] == "M") {
//         n += 900;
//         i += 1;
//       } else {
//         n += 100;
//       }
//     } else if (s[i] == "V") {
//       n += 5;
//     } else if (s[i] == "L") {
//       n += 50;
//     } else if (s[i] == "D") {
//       n += 500;
//     } else if (s[i] == "M") {
//       n += 1000;
//     }
//     i += 1;
//   }
//   return n;
// };

/* Solution that I found it cool */

var romanToInt = function(s) {
  map = new Map([["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]);
  i = s.length - 1;
  n = map.get(s[i]);
  while (i > 0) {
    curr = map.get(s[i]);
    prev = map.get(s[i - 1]);
    prev >= curr ? (n += prev) : (n -= prev);
    i--;
  }
  return n;
};
