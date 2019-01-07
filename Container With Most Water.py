# Given n non-negative integers a1, a2, ..., an , where each represents a point
# at coordinate (i, ai). n vertical lines are drawn such that the two endpoints
# of line i is at (i, ai) and (i, 0). Find two lines, which together with
# x-axis forms a container, such that the container contains the most water.


class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        # Brute force
        # current_max = 0
        # n = len(height) # 9
        # for i in range(n-1):
        #     for j in range(i, n):
        #         current_max = max(min(height[i], height[j]) * (j-i), current_max)
        # return current_max

        # 2 pointers
        current_max = 0
        l, r = 0, len(height) - 1
        while l < r:
            current_max = max(min(height[l], height[r]) * (r-l), current_max)
            if (height[l] < height[r]):
                l += 1
            else:
                r -= 1
        return current_max
