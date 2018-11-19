class Solution(object):
    def subsets(self, nums):
        length = len(nums)
        subsets = [[]]

        if length in (0, 1):
            return [nums]
        
        for i in range(length):
            for s in self.subsets(nums[:i] + nums[i+1:]):
                subsets.append(s)
                subsets.append([nums[i]] + s)
        subsets = [list(x) for x in set(tuple(x) for x in subsets)]
        for x in subsets
        return subsets



class Solution(object):
    def subsets(self, nums):
        nums.sort()
        result = [[]]
        for num in nums:
            for i in result:
                s = i + [num]
                result = result + [s]
        return result