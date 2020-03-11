/* Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature. */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  const slots = { 0: 0 };
  intervals.forEach(interval => {
    for (let i = interval[0]; i < interval[1]; i++) {
      slots[i] = slots[i] + 1 || 1;
    }
  });
  return Math.max(...Object.values(slots));
};
console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
    [2, 5],
    [7, 100]
  ])
);
