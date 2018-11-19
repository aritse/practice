class Solution(object):
    def is_valid(self, paren):
        stack = []
        for p in paren:
            if p == '(':
                stack.append(p)
            else:
                if stack:
                    stack.pop()
                else:
                    return False
        if stack:
            return False
        return True

    def generateParenthesis(self, n):
        combos = []
        length = 2 * n
        count = pow(2, length)

        # generate permutations of n pairs of '(' and ')'
        binary = "{0:0" + str(length) + "b}"
        for i in range(count):
            b = binary.format(i)
            paren = b.replace('0', '(').replace('1', ')')
            if self.is_valid(paren):
                combos.append(paren)
        return combos
