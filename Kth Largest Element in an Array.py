# Find the kth largest element in an unsorted array.
# Note that it is the kth largest element in the
# sorted order, not the kth distinct element.

class Solution(object):
    def findKthLargest(self, nums, k):
        for i in range(k):
            max_v = -10000
            max_i = -1
            for i, v in enumerate(nums):
                if v > max_v:
                    max_v = v
                    max_i = i
            del nums[max_i]
        return max_v