# class Solution(object):
#     def oneSum(self, D, s):
#         n = 0
#         for v in D:
#             if v == s:
#                 n += 1
#         return n

#     def twoSum(self, C, D, s):
#         n = 0
#         for v in C:
#             n += self.oneSum(D, s-v)
#         return n

#     def threeSum(self, B, C, D, s):
#         n = 0
#         for v in B:
#             n += self.twoSum(C, D, s-v)
#         return n

#     def fourSum(self, A, B, C, D, s):
#         n = 0
#         for v in A:
#             n += self.threeSum(B, C, D, s-v)
#         return n

#     def fourSumCount(self, A, B, C, D):
#         return self.fourSum(A, B, C, D, 0)


class Solution(object):
    def fourSumCount(self, A, B, C, D):
        dic = {}
        res = 0
        for a in A:
            for b in B:
                if a + b not in dic:
                    dic[a + b] = 1
                else:
                    dic[a + b] += 1
        for c in C:
            for d in D:
                if -(c + d) in dic:
                    res += dic[-(c + d)]
        return res
