/** You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Example 1:

Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
Example 2:

Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false

Constraints:

2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point. */

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function (coordinates) {
  const n = coordinates.length;
  if (n === 2) return true;

  const [x1, y1] = [coordinates[0][0], coordinates[0][1]];
  const [x2, y2] = [coordinates[n - 1][0], coordinates[n - 1][1]];
  
  // all on vertical line?
  if (x1 === x2) {
    for (let i = 0; i < n; i++) {
      if (coordinates[i][0] !== x1) return false;
    }
    return true;
  }
  
  // all on horizontal line?
  if (y1 === y2) {
    for (let i = 0; i < n; i++) {
      if (coordinates[i][1] !== y1) return false;
    }
    return true;
  }

  // linear equation parameters
  const alpha = (y2 - y1) / (x2 - x1);
  const beta = y1 - alpha * x1;

  // run all points through the linear equation
  for (let i = 0; i < n; i++) {
    const [x, y] = coordinates[i];
    if (y !== ((alpha * x) + beta)) return false;
  }
  return true;
};
