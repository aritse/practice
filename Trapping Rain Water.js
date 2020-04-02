/**Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6 */

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = height => {
  const n = height.length;
  if (n < 1) return 0;
  let totalWaterVolume = 0;

  for (let i = 1; i < n - 1; i++) {
    let [leftMax, rightMax] = [0, 0];
    for (let j = 0; j <= i; j++) leftMax = Math.max(leftMax, height[j]);
    for (let j = i; j < n; j++) rightMax = Math.max(rightMax, height[j]);
    const volume = Math.min(leftMax, rightMax) - height[i];
    totalWaterVolume += volume;
  }
  return totalWaterVolume;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
