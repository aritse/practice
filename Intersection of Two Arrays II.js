// Given two arrays, write a function to compute their intersection.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/* My solution */

var intersect = function(n1, n2) {
  len1 = n1.length;
  len2 = n2.length;
  shorter = len1 > len2 ? n2 : n1;
  longer = len1 > len2 ? n1 : n2;

  count = {}; // count occurrence
  for (n of longer) count[n] = count[n] + 1 || 1;

  intersection = [];
  for (n of shorter) {
    if (count[n] > 0) {
      count[n]--;
      intersection.push(n);
    }
  }
  return intersection;
};

/* Solution that I found it cool */

// The filter() method creates an array filled with all array elements that pass a test (provided as a function).
// var intersect = (n1, n2) =>
//   n1.filter(e => {
//     if (n2.includes(e)) return n2.splice(n2.indexOf(e), 1) || true;
//   });

//   The reduce() method reduces the array to a single value.
// var intersect = (n1, n2) => {
//   return n1.reduce((acc, e) => (n2.includes(e) ? acc.concat(n2.splice(n2.indexOf(e), 1)) : acc), []);
// };
