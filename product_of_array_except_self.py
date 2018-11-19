# import numpy as np

# class Solution(object):
#     def multiply(self, n):
#         m = 1
#         for i in range(len(n)):
#             m *= n[i]
#         return m

#     def productExceptSelf(self, nums):
#         output = []
#         for i in range(len(nums)):
#             product = 1
#             if i > 0:
#                 product *= self.multiply(nums[:i])
#             if i < len(nums)-1:
#                 product *= self.multiply(nums[i+1:])
#             output.append(product)
#         return output


class Solution(object):
    def productExceptSelf(self, nums):
        res = [1] * len(nums)
        p = 1
        for i, n in enumerate(nums):
            res[i] = p
            p *= n
        p = 1
        for i, n in enumerate(nums[::-1]):
            res[~i] *= p
            p *= n
        return res
