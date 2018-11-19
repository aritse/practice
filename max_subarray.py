class Solution(object):
    def maxSubArray(self, nums):
        # Approach 1
        # for i in range(1, len(nums)):
        #     if nums[i-1] > 0:
        #         nums[i] += nums[i-1]
        # return max(nums)

        # Approach 2
        running_sum = nums[0]
        largest_sum = nums[0]
        for x in nums[1:]:
            running_sum = max(x, running_sum + x)
            largest_sum = max(largest_sum, running_sum)
        return largest_sum
