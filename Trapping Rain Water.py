# Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

class Solution(object):
    # def trap(self, height):
    '''
    Brute force approach:
    Do as directed in question. For each element in the array, we find the maximum level of water it can trap after the rain, which is equal to the minimum of maximum height of bars on both the sides minus its own height.
    '''
    #     ans = 0
    #     size = len(height)
    #     for i in range(1, size - 1):
    #         max_left, max_right = 0, 0
    #         for j in range(0, i+1):
    #             max_left = max(max_left, height[j])
    #         for j in range(i, size):
    #             max_right = max(max_right, height[j])
    #         ans += min(max_left, max_right) - height[i]
    #     return ans
    def trap(self, height):
        '''
        DP:
        In brute force, we iterate over the left and right parts again and again just to find the highest bar size upto that index. But, this could be stored. 
        '''
        size = len(height)
        if size == 0:
            return 0

        ans = 0
        left_max = [0] * size
        right_max = [0] * size

        left_max[0] = height[0]
        for i in range(1, size):
            left_max[i] = max(height[i], left_max[i-1])

        right_max[size-1] = height[size-1]
        for i in reversed(range(size-1)):
            right_max[i] = max(height[i], right_max[i+1])

        for i in range(1, size-1):
            ans += min(left_max[i], right_max[i]) - height[i]
        return ans