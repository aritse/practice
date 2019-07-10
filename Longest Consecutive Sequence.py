# Given an unsorted array of integers, find the length of the longest consecutive elements sequence. Your algorithm should run in O(n) complexity.


class Solution(object):
    def longestConsecutive(self, nums):
        if len(nums) == 0:
            return 0
        maximum = max(nums)
        flags = [False] * (maximum+1)
        for n in nums:
            flags[n] = True
        longest = 1
        current = 0
        for flag in flags:
            if flag:
                current += 1
            else:
                if current > longest:
                    longest = current
                current = 0

        return longest
