class Solution(object):
    def findUnsortedSubarray(self, nums):
        l = len(nums)
        shortest = l
        sort = sorted(nums)
        for i in range(l):
            if sort[i] != nums[i]:
                break
            shortest -= 1
        bottom = l - shortest
        for i in reversed(range(bottom, l)):
            if sort[i] != nums[i]:
                break
            shortest -= 1
        return shortest
