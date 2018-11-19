class Solution(object):
    def getSum(self, a, b):
        # Approach 1: Vinn diagram
        # intersection = (a & b) * 2
        # xor = a ^ b
        # return (intersection += xor)

        # Approach 2: Eval function
        return eval('a+b')

        # Approach 3: Doesn't handle negative numbers
        # while b:
        #     c = a & b   # find bits where carry will be generated
        #     a = a ^ b   # sum without carry
        #     b = c << 1  # update b
        # return a
