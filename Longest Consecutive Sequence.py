# Given an unsorted array of integers, find the length of the longest
# consecutive elements sequence. Your algorithm should run in O(n) complexity.


class Solution(object):
    def longestConsecutive(self, nums):
        s = set(nums)
        longest = 0
        for num in nums:
            if num + 1 in s:
                continue
            count = 0
            while num in s:
                count += 1
                num -= 1
            longest = max(longest, count)
        return longest
