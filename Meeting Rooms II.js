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
const minMeetingRooms = function(meetings) {
  const rooms = [];

  // sort meetings by start time
  meetings.sort((a, b) => a[0] - b[0]);

  meetings.forEach(([startTime, endTime]) => {
    // sort rooms by availability
    rooms.sort((a, b) => a - b);

    let roomsLeft = rooms.length;
    while (roomsLeft) {
      const available = rooms[roomsLeft - 1];
      if (startTime >= available) {
        rooms[roomsLeft - 1] = endTime;
        break;
      }
      roomsLeft--;
    }
    if (!roomsLeft) rooms.push(endTime);
  });

  return rooms.length;
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
