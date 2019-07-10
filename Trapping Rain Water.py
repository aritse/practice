# Given n non-negative integers representing an elevation map where the width
# of each bar is 1, compute how much water it is able to trap after raining.


class Solution(object):
    # Brute force: Do as directed in question. For each element in the
    # array, we find the maximum level of water it can trap after the rain,
    # which is equal to the minimum of maximum height of bars on both the sides
    # minus its own height.
    def trap(self, height):
        water = 0
        length = len(height)
        for i in range(1, length-1):
            max_left, max_right = 0, 0
            for j in range(0, i+1):
                max_left = max(max_left, height[j])
            for j in range(i, length):
                max_right = max(max_right, height[j])
            water += min(max_left, max_right) - height[i]
        return water

    # DP: In brute force, we iterate over the left and right parts again and
    # again just to find the highest bar size up to that index. But, they could
    # be stored.
    def trap2(self, height):
        length = len(height)
        if length == 0:
            return 0

        water = 0
        left_max = [0] * length
        right_max = [0] * length

        left_max[0] = height[0]
        for i in range(1, length):
            left_max[i] = max(height[i], left_max[i-1])

        right_max[length-1] = height[length-1]
        for i in reversed(range(length-1)):
            right_max[i] = max(height[i], right_max[i+1])

        for i in range(1, length-1):
            water += min(left_max[i], right_max[i]) - height[i]
        return water
