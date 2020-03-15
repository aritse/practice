/* Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature. */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = intervals => {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  const overlaps = [];
  intervals.forEach(([start, end]) => {
    let noOverlap = true;
    for (let i = overlaps.length - 1; i >= 0; i--) {
      if (start <= overlaps[i][1]) {
        overlaps[i][1] = Math.max(end, overlaps[i][1]);
        noOverlap = false;
        break;
      }
    }
    if (noOverlap) overlaps.push([start, end]);
  });

  return overlaps;
};
